import { useState, useEffect } from "react";
import api from "../services/api";
import testimonialsData from "../data/testimonials";
import TestimonialTable from "../components/testimonials/TestimonialTable";
import SummaryCards from "../components/testimonials/SummaryCards";
import SearchBar from "../components/testimonials/SearchBar";
import ViewModal from "../components/testimonials/ViewModal";
import EditModal from "../components/testimonials/EditModal";
import DeleteModal from "../components/testimonials/DeleteModal";
import AddModal from "../components/testimonials/AddModal";

function Testimonials() {
    const [search, setSearch] = useState("");
    const [testimonials, setTestimonials] = useState([]);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [isEditOpen, setIsEditOpen] = useState(false);
const [isDeleteOpen, setIsDeleteOpen] = useState(false);
const [isAddOpen, setIsAddOpen] = useState(false);
useEffect(() => {
  fetchTestimonials();
}, []);

const fetchTestimonials = async () => {
  try {
    const response = await api.get("testimonials/");

    setTestimonials(response.data);

  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="min-h-screen bg-[#F8F9FC] p-8">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900">
        Testimonials
      </h1>

      <p className="mt-2 text-gray-500">
        Manage all customer testimonials.
      </p>

      {/* Search Bar */}
      <div className="mt-8 flex justify-between items-center">

  <SearchBar
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <button
    onClick={() => setIsAddOpen(true)}
    className="bg-[#6C63FF] text-white px-5 py-3 rounded-xl hover:bg-[#584EF8] transition"
  >
    + Add Testimonial
  </button>

</div>

<SummaryCards testimonials={testimonials} />
      {/* Table */}
      <TestimonialTable
  testimonials={testimonials}
  search={search}
  onView={(testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  }}
  onEdit={(testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsEditOpen(true);
  }}
  onDelete={(testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsDeleteOpen(true);
  }}
/>
      <ViewModal
  open={isModalOpen}
  testimonial={selectedTestimonial}
  onClose={() => setIsModalOpen(false)}
/>
<EditModal
  open={isEditOpen}
  testimonial={selectedTestimonial}
  onClose={() => setIsEditOpen(false)}
 onSave={async (updatedData) => {
  try {
    await api.put(
      `testimonials/${updatedData.id}/`,
      updatedData
    );

    fetchTestimonials();

    setIsEditOpen(false);

  } catch (error) {
    console.error(error);
    alert("Failed to update testimonial");
  }
}}
/>
<DeleteModal
  open={isDeleteOpen}
  testimonial={selectedTestimonial}
  onClose={() => setIsDeleteOpen(false)}
  onDelete={async (id) => {
  try {
    await api.delete(`testimonials/${id}/`);

    fetchTestimonials();

    setIsDeleteOpen(false);

  } catch (error) {
    console.error(error);
    alert("Failed to delete testimonial");
  }
}}
/>
<AddModal
  open={isAddOpen}
  onClose={() => setIsAddOpen(false)}
  onAdd={async (newTestimonial) => {
    try {
      await api.post("testimonials/", newTestimonial);

      fetchTestimonials();

      setIsAddOpen(false);
    } catch (error) {
      console.error(error);
      alert("Failed to add testimonial");
    }
  }}
/>
    </div>
  );
}

export default Testimonials;