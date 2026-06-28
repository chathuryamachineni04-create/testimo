import { useState, useEffect } from "react";
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
    const [testimonials, setTestimonials] = useState(() => {
  const saved = localStorage.getItem("testimonials");

  return saved
    ? JSON.parse(saved)
    : testimonialsData;
});
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [isEditOpen, setIsEditOpen] = useState(false);
const [isDeleteOpen, setIsDeleteOpen] = useState(false);
const [isAddOpen, setIsAddOpen] = useState(false);
useEffect(() => {
  localStorage.setItem(
    "testimonials",
    JSON.stringify(testimonials)
  );
}, [testimonials]);
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
 onSave={(updatedData) => {

  const updatedTestimonials = testimonials.map((item) =>
    item.id === updatedData.id ? updatedData : item
  );

  setTestimonials(updatedTestimonials);

  setSelectedTestimonial(updatedData);

  setIsEditOpen(false);

}}
/>
<DeleteModal
  open={isDeleteOpen}
  testimonial={selectedTestimonial}
  onClose={() => setIsDeleteOpen(false)}
  onDelete={(id) => {
    const updatedTestimonials = testimonials.filter(
      (item) => item.id !== id
    );

    setTestimonials(updatedTestimonials);

    setIsDeleteOpen(false);
  }}
/>
<AddModal
  open={isAddOpen}
  onClose={() => setIsAddOpen(false)}
  onAdd={(newTestimonial) => {
    setTestimonials([...testimonials, newTestimonial]);
    setIsAddOpen(false);
  }}
/>
    </div>
  );
}

export default Testimonials;