export default function QuoteRequestForm() {
  return (
    <section id="contact" className="py-10 px-6 bg-gray-800">
      <h3 className="text-2xl font-bold text-center mb-6">Contact Us</h3>
      <p className="text-center text-md text-bg-sky-50 mb-6 font-medium">
        Interested in scheduling a ride, or have a general question?
        <br />
        <br />
        Submit the form below,
        <br />
        or contact us at{" "}
        <span className="font-bold">
          <a href="tel:+13474560926">(347) 456-0926</a>
        </span>
      </p>
      <form className="max-w-lg mx-auto space-y-4">
        <input
          required
          type="text"
          placeholder="* Name"
          className="w-full border p-2 rounded"
        />
        <input
          required
          type="tel"
          placeholder="* Phone Number"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          required
          placeholder="* Additional Details"
          rows="4"
          className="w-full border p-2 rounded"
        ></textarea>
        <p className="text-xs text-right opacity-50">* = required</p>
        <button type="submit" className="w-full text-bg-sky-50 py-4 my-4 rounded">
          Send
        </button>
      </form>
    </section>
  );
}
