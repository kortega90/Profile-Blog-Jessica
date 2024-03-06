export default function Linkedin() {
  return (
    <>
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      ></script>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="kengi-enrique-ortega-rodriguez-56995874"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/kengi-enrique-ortega-rodriguez-56995874"
        >
          Kengi
        </a>
      </div>
    </>
  );
}
