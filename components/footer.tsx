import Link from "next/link";
import React from "react";

const HomeFooter = () => {
  return (
    <div className="text-sm flex flex-col justify-center items-center">
      <span>
        "You do not rise to the level of your goals, you fall to the level of
        your systems."
      </span>

      <span>
        Built with ❤️ by{" "}
        <Link
          className="text-primary underline"
          href="https://github.com/Karan16-prog"
        >
          Karan
        </Link>
      </span>
    </div>
  );
};

export default HomeFooter;
