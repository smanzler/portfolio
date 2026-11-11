"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CircleDot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { FileCard } from "@/components/file-card";
import { Button } from "@/components/ui/button";
import {
  sendContactEmail,
  type ContactFormData,
} from "@/features/contact/actions/send-email";

const labels = ["role", "project", "just saying hi"];

const emptyForm: ContactFormData = {
  title: "",
  label: labels[0],
  name: "",
  email: "",
  message: "",
};

type Status =
  | { type: "idle" }
  | { type: "success" }
  | { type: "error"; message: string };

const fieldLabel =
  "font-mono text-xs tracking-[0.06em] text-muted-foreground";
const inputClass =
  "block w-full p-4 rounded-[10px] border border-border bg-white font-mono text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:opacity-60";

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.type !== "idle") setStatus({ type: "idle" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const result = await sendContactEmail(form);
      if (result.success) {
        setStatus({ type: "success" });
        setForm(emptyForm);
      } else {
        setStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FileCard
      icon={<CircleDot aria-hidden="true" />}
      path={["smanzler", "inbox", "issues / new"]}
      aside={<span className="hidden md:inline">Usually replies in ~1–2 days</span>}
    >
      <form
        onSubmit={handleSubmit}
        className="m-0 flex flex-col lg:flex-row gap-10 px-5 py-7 lg:px-9 lg:pt-8 lg:pb-9"
      >
        <div className="flex-1 flex flex-col gap-[18px]">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-title" className={fieldLabel}>
              ADD A TITLE
            </label>
            <input
              id="contact-title"
              name="title"
              type="text"
              placeholder="e.g. Engineering role at …"
              value={form.title}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={inputClass}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="contact-name" className={fieldLabel}>
                YOUR NAME
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Ada Lovelace"
                value={form.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={inputClass}
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="contact-email" className={fieldLabel}>
                EMAIL
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="ada@example.com"
                value={form.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className={fieldLabel}>
              ADD A DESCRIPTION
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={7}
              placeholder="Leave a comment…"
              value={form.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={cn(inputClass, "resize-y")}
            />
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-4">
            <p role="status" className="m-0 text-sm sm:mr-auto">
              {status.type === "success" && (
                <span className="text-foreground-soft">
                  Issue opened. I&apos;ll get back to you soon.
                </span>
              )}
              {status.type === "error" && (
                <span className="text-destructive">{status.message}</span>
              )}
            </p>
            <Button type="submit" size="pill" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  Submitting
                  <Loader2 className="animate-spin" aria-hidden="true" />
                </>
              ) : (
                <>
                  Submit new issue
                  <ArrowRight aria-hidden="true" />
                </>
              )}
            </Button>
          </div>
        </div>

        <aside className="lg:flex-[0_0_260px] flex flex-col">
          <div className="flex flex-col gap-2.5 pb-[18px] border-b border-rule">
            <span className={fieldLabel}>ASSIGNEE</span>
            <span className="flex items-center gap-2.5 font-medium">
              <Image
                src="/simon-icon.png"
                alt=""
                width={28}
                height={28}
                className="size-7 rounded-full bg-well"
              />
              Simon Manzler
            </span>
          </div>
          <fieldset className="m-0 p-0 py-[18px] border-0 border-b border-rule flex flex-col gap-2.5">
            <legend className={cn(fieldLabel, "float-left mb-2.5")}>
              LABELS
            </legend>
            <div className="clear-left flex flex-wrap gap-2">
              {labels.map((label) => (
                <label
                  key={label}
                  className={cn(
                    "px-3 py-1 rounded-full font-mono text-xs border cursor-pointer has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/50",
                    form.label === label
                      ? "bg-brand border-brand text-white"
                      : "border-border text-foreground-soft hover:border-foreground-soft"
                  )}
                >
                  <input
                    type="radio"
                    name="label"
                    value={label}
                    checked={form.label === label}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="sr-only"
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="flex flex-col gap-2.5 py-[18px]">
            <span className={fieldLabel}>STATUS</span>
            <span className="flex items-center gap-2 text-[15px]">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-brand"
              />
              Open to new opportunities
            </span>
          </div>
          <span
            aria-hidden="true"
            className="hidden lg:block font-hand font-medium text-2xl text-brand -rotate-3 pt-2"
          >
            no issue too small :)
          </span>
        </aside>
      </form>
    </FileCard>
  );
}
