import { useNavigate } from "react-router";

const apps = [
  {
    title: "Rep",
    description:
      "Workout tracker built to work offline and sync with your friends.",
    image: "/src/assets/rep-icon.png",
  },
  {
    title: "Dash",
    description:
      "Running tracker built to work offline and sync with your friends.",
    image: "/src/assets/dash-icon.png",
  },
];

const Apps = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20">
      <div className="flex flex-col px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Apps
        </h1>
        <p className="text-base text-muted-foreground mb-8">
          Here are some of the apps I've worked on.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <div
            key={app.title}
            className="flex flex-row cursor-pointer hover:bg-accent dark:hover:bg-input/20 p-6 gap-6 rounded-xl"
            onClick={() => navigate(`/apps/${app.title}`)}
          >
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="relative rounded-lg overflow-hidden bg-muted w-16 h-16">
                <img
                  src={app.image}
                  alt={app.title}
                  className="object-cover w-full h-full object-center"
                />
              </div>
              <p className="text-xs text-muted-foreground">{app.title}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">{app.title}</h1>
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {app.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
