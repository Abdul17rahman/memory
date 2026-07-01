import { useState } from "react";

export default function CreateMemo({ onSubmit }) {
  const [memo, setMemo] = useState({
    title: "",
    category: "",
    priority: "Medium",
    recipient: "",
    content: "",
  });

  const handleChange = (e) => {
    setMemo({
      ...memo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(memo);
    } else {
      console.log(memo);
    }

    setMemo({
      title: "",
      category: "",
      priority: "Medium",
      recipient: "",
      content: "",
    });
  };

  return (
    <div className="form-card">
      <h2>Create Memo</h2>
      <p>Create and save an internal memo.</p>

      <form onSubmit={handleSubmit} className="app-form">
        <div className="form-group">
          <label>Title</label>

          <input
            type="text"
            name="title"
            placeholder="Memo title"
            value={memo.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>

          <input
            type="text"
            name="category"
            placeholder="Finance, HR, Operations..."
            value={memo.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Priority</label>

          <select name="priority" value={memo.priority} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
        </div>

        <div className="form-group">
          <label>Recipient</label>

          <input
            type="text"
            name="recipient"
            placeholder="All Staff"
            value={memo.recipient}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Memo Content</label>

          <textarea
            rows="8"
            name="content"
            placeholder="Write your memo here..."
            value={memo.content}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          Save Memo
        </button>
      </form>
    </div>
  );
}
