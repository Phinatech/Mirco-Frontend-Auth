import React from "react";
import pics from "../../assets/teacher-profile.webp";

const Profile: React.FC = () => {
  return (
    <div className="w-[100%] h-[80vh]">
      <div className="h-[50vh] bg-[#FEF0EF] flex justify-between">
        <div className="h-[100%] w-[25%]">
          <div className=" h-[300px] w-[280px] relative top-24 left-16 shadow-lg bg-white flex items-center justify-center ">
            <div className=" h-[250px] w-[250px] bg-red-400 rounded-xl ">
              <img src={pics} alt="" />
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[73%] flex items-end ">
          <div className=" h-[68%] w-[100%] flex-col ">
            <div className=" h-[25%] w-[100%] flex items-center ">
              <div className="flex h-[100%] w-[500px] mr-[100px] ">
                {" "}
                <p className=" text-xl ">Hardy Fowler</p>
                <p className=" align-baseline ">illustrator & Artist</p>
              </div>
              <button className=" h-[50px] w-[200px] rounded-xl border-2 border-red-300 text-red-300 text-lg  ">
                Follow
              </button>
            </div>
            <div className=" h-[50%] w-[90%] flex items-center justify-center ">
              Hi, my name is Amelie.
              <br />I am a photo artist and art director from Munich. Last year
              I was chosen to be one of the nine Adobe Creative Residents in
              2019/2020.My pictures are widely known for their colorful,
              surrealistic touch. by books, lyrics and words in total, I am able
              to abstract and visualize them into new artworks.
            </div>
            <div className=" h-[20%] flex w-[100%] items-center ">
              <p>4.6 Instructor Rating</p>
              <p>1,258 Students</p>
              <p>Course</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
