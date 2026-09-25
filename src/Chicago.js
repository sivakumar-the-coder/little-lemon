function Chicago() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-content">
        <h2 id="about-title">About Little Lemon</h2>
        <p className="about-location">Chicago</p>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The restaurant
          features a locally sourced menu with daily specials.
        </p>
        <p>
          Founded by two Italian brothers, Mario and Adrian, Little Lemon brings
          the flavors of the Mediterranean to the heart of Chicago.
        </p>
      </div>
      <div className="about-images">
        <img src="/mario-and-adrian-a.jpg" alt="Mario and Adrian in the Little Lemon kitchen" />
        <img src="/mario-and-adrian-b.jpg" alt="The Little Lemon founders preparing food" />
      </div>
    </section>
  );
}

export default Chicago;