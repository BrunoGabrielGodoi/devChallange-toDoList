function Footer() {
  return (
    <div
      onClick={() =>
        window.open(
          "https://github.com/BrunoGabrielGodoi/devChallange-toDoList",
          "_blank",
          "noopener,noreferrer"
        )
      }
      className="flex cursor-pointer sticky bottom-10"
    >
      <span className="mx-auto">Made by Bruno :3</span>
    </div>
  );
}

export default Footer;
