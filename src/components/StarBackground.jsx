import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [snowflakes, setSnowflakes] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const generateStars = () => {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 10000);
      setStars(
        Array.from({ length: count }, (_, i) => ({
          id: i,
          size: Math.random() * 3 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: Math.random() * 4 + 2,
        }))
      );
    };

    const generateMeteors = () => {
      setMeteors(
        Array.from({ length: 4 }, (_, i) => ({
          id: i,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: Math.random() * 20,
          delay: Math.random() * 10,
          animationDuration: Math.random() * 3 + 3,
        }))
      );
    };

    generateStars();
    generateMeteors();

    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  useEffect(() => {
    const count = 60;
    setSnowflakes(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 3,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 8 + 8,
        opacity: Math.random() * 0.5 + 0.3,
        drift: (Math.random() - 0.5) * 60, 
      }))
    );
  }, []);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {isDark && (
          <>
            {stars.map((star) => (
              <div
                key={star.id}
                className="star animate-pulse-subtle"
                style={{
                  width: star.size + "px",
                  height: star.size + "px",
                  left: star.x + "%",
                  top: star.y + "%",
                  opacity: star.opacity,
                  animationDuration: star.animationDuration + "s",
                }}
              />
            ))}
            {meteors.map((meteor) => (
              <div
                key={meteor.id}
                className="meteor animate-meteor"
                style={{
                  width: meteor.size * 50 + "px",
                  height: meteor.size * 2 + "px",
                  left: meteor.x + "%",
                  top: meteor.y + "%",
                  animationDelay: meteor.delay + "s",
                  animationDuration: meteor.animationDuration + "s",
                }}
              />
            ))}
          </>
        )}
        {!isDark &&
          snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="snowflake"
              style={{
                width: flake.size + "px",
                height: flake.size + "px",
                left: flake.x + "%",
                "--snow-opacity": flake.opacity,
                "--snow-drift": flake.drift + "px",
                animationDelay: flake.delay + "s",
                animationDuration: flake.duration + "s",
              }}
            />
          ))}
      </div>
    </>
  );
};