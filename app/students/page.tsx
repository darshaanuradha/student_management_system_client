"use client";

import { useState, useEffect, FormEvent } from "react";

interface Student {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

export default function StudentCrud() {
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/students";

  const [students, setStudents] = useState<Student[]>([]);
  const [formData, setFormData] = useState<Student>({
    name: "",
    email: "",
    phone: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // 1. READ: Fetch all students
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch students");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // 2. CREATE & UPDATE: Submit handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        // UPDATE student
        await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setEditingId(null);
      } else {
        // CREATE new student
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      setFormData({ name: "", email: "", phone: "" });
      fetchStudents();
    } catch (err) {
      console.error(err);
    }
  };

  // 3. DELETE: Remove student
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchStudents();
    } catch (err) {
      console.error(err);
    }
  };

  // Populate form for editing
  const handleEdit = (student: Student) => {
    if (student.id) {
      setEditingId(student.id);
      setFormData({
        name: student.name,
        email: student.email,
        phone: student.phone,
      });
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <main className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Student Management System
      </h1>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 border p-6 rounded-lg mb-8 shadow-sm space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">
          {editingId ? "Edit Student" : "Add New Student"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            {editingId ? "Update Student" : "Add Student"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left font-semibold text-gray-600">ID</th>
              <th className="p-3 text-left font-semibold text-gray-600">
                Name
              </th>
              <th className="p-3 text-left font-semibold text-gray-600">
                Email
              </th>
              <th className="p-3 text-left font-semibold text-gray-600">
                Phone
              </th>
              <th className="p-3 text-center font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  Loading students...
                </td>
              </tr>
            ) : students.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-gray-700">{student.id}</td>
                  <td className="p-3 text-gray-700">{student.name}</td>
                  <td className="p-3 text-gray-700">{student.email}</td>
                  <td className="p-3 text-gray-700">{student.phone}</td>
                  <td className="p-3 text-center space-x-2">
                    <button
                      onClick={() => handleEdit(student)}
                      className="bg-amber-500 hover:bg-amber-600 text-white text-sm py-1 px-3 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => student.id && handleDelete(student.id)}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
