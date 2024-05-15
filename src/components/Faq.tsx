const Faq = () => {
  return (
    <div className="p-6">
      <div className="collapse collapse-arrow bg-base-200 m-1">
        <input type="radio" name="my-accordion-2" id="question1" />
        <label
          htmlFor="question1"
          className="collapse-title text-xl font-medium"
        >
          What is the purpose of this project?
        </label>
        <div className="collapse-content">
          <p>
            This project is a weather application that provides real-time
            weather updates.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 m-1">
        <input type="radio" name="my-accordion-2" id="question2" />
        <label
          htmlFor="question2"
          className="collapse-title text-xl font-medium"
        >
          How do I use this application?
        </label>
        <div className="collapse-content">
          <p>
            Enter your location in the search bar to get the current weather
            information.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 m-1">
        <input type="radio" name="my-accordion-2" id="question3" />
        <label
          htmlFor="question3"
          className="collapse-title text-xl font-medium"
        >
          What locations does this application support?
        </label>
        <div className="collapse-content">
          <p>
            This application supports weather updates for locations worldwide.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 m-1">
        <input type="radio" name="my-accordion-2" id="question4" />
        <label
          htmlFor="question4"
          className="collapse-title text-xl font-medium"
        >
          How often are the weather updates?
        </label>
        <div className="collapse-content">
          <p>
            The weather updates are provided in real-time and are constantly
            refreshed.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 m-1">
        <input type="radio" name="my-accordion-2" id="question5" />
        <label
          htmlFor="question5"
          className="collapse-title text-xl font-medium"
        >
          Is this application free to use?
        </label>
        <div className="collapse-content">
          <p>Yes, this application is free to use.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
