import { useDispatch, useSelector } from "react-redux";
import {
  addEmail,
  addSubject,
  addFromEmail,
  addFromName,
  addFile,
} from "../redux/slices/sendNewsletterSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSendNewsletterMutation } from "../redux/api/subscribersApi";
import { useEffect } from "react";

const SendNewsletter = () => {
  const { email, subject, fromEmail, fromName } = useSelector(
    (state: {
      sendNewsletter: {
        email: string;
        subject: string;
        fromEmail: string;
        fromName: string;
      };
    }) => state.sendNewsletter
  );
  const dispatch = useDispatch();
  const [sendNewsletter, { data, isLoading, error }] =
    useSendNewsletterMutation();
  const navigate = useNavigate();

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = new FormData();
    const fileInput = document.querySelector("#fileInput") as HTMLInputElement;
    formdata.append("email", `[{  "email": "${email}", "name": "${email}"}]`);
    formdata.append(
      "file",
      fileInput.files?.[0]!,
      `${fileInput.files?.[0].name}`
    );
    formdata.append("subject", subject);
    formdata.append("fromEmail", fromEmail);
    formdata.append("fromName", fromName);

    sendNewsletter({ type: "distribute", data: formdata });
  };

  useEffect(() => {
    if (data || error) {
      dispatch(addEmail(""));
      dispatch(addSubject(""));
      dispatch(addFromEmail(""));
      dispatch(addFromName(""));
      dispatch(addFile(""));
      navigate("/");
    }
  }, [data, error, dispatch, navigate]);

  return (
    <div className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="w-full max-w-lg mx-auto flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Send Newsletter:</h1>
        <Link to="/" className="link no-underline hover:underline">
          {"« Back"}
        </Link>
      </div>
      <div className="card shrink-0 w-full max-w-lg shadow-md bg-base-100 mx-auto mb-20">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              value={email}
              onChange={(e) => dispatch(addEmail(e.target.value))}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered"
              required
              value={subject}
              onChange={(e) => dispatch(addSubject(e.target.value))}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">From Email</span>
            </label>
            <input
              type="email"
              placeholder="From Email"
              className="input input-bordered"
              required
              value={fromEmail}
              onChange={(e) => dispatch(addFromEmail(e.target.value))}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">From Name</span>
            </label>
            <input
              type="text"
              placeholder="From Name"
              className="input input-bordered"
              required
              value={fromName}
              onChange={(e) => dispatch(addFromName(e.target.value))}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">File</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full file-input-md"
              placeholder="File"
              required
              id="fileInput"
              accept=".html"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Newsletter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendNewsletter;
