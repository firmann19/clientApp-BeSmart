import React from "react";
import CourseItem from "./CourseItem";
import Fe from "../../assets/FE.png";
import Md from "../../assets/MD.png";
import Ui from "../../assets/UIUX.png";

const Course = () => {
  return (
    <div className="px-6 items-center mt-8 p-8">
      <h1 className="text-4xl font-bold text-center">Course</h1>
      <p className="font-semibold text-center my-6">
        Berbagai materi pembelajaran yang dapat menciptakan
        <br /> pola pikir kritis untuk sebuah inovasi
      </p>
      <div className="flex gap-18 mx-20 justify-between">
        <CourseItem
          img={Fe}
          title="Front End Web"
          desk="Belajar membangun tampilan aplikasi website yang interaktif"
        />
        <div className="bg-primary-color items-center p-8 text-center w-80 h-96 rounded-xl filter-sd">
          <img src={Md} alt="" className="mx-14 w-2/4" />
          <h1 className="text-2xl font-bold text-white my-6">
            Mobile Development
          </h1>
          <p className="text-center text-white">
            Belajar membangun aplikasi android untuk menjadi developer android
            standar global."
          </p>
        </div>
        <CourseItem
          img={Ui}
          title="UI/UX Designer"
          desk="Belajar  membuat design prototype untuk menjadi
                seorang UI/UX Design 
               profesional."
        />
      </div>
    </div>
  );
};

export default Course;
