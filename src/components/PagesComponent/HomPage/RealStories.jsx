import React from "react";

const RealStories = () => {
  const avatars = [
    "https://thumbs.dreamstime.com/b/international-group-happy-women-hugging-diversity-ethnicity-people-concept-smiling-different-over-green-natural-background-93351044.jpg",
    "https://thumbs.dreamstime.com/b/beauty-diverse-group-ethnic-women-portrait-happy-different-ethnicity-models-standing-together-closed-eyes-smiling-186544117.jpg",
    "https://thumbs.dreamstime.com/b/group-multiracial-friends-having-fun-outdoor-happy-mixed-race-people-taking-selfie-together-youth-millennial-generation-multi-194304293.jpg",
    "https://media.istockphoto.com/id/1466789902/video/diverse-american-faces.jpg?s=640x640&k=20&c=tf8cKclA6T1oXq7fN240BtYDEUpuqSeMNeoLx1kRN6Y=",
    "https://thumbs.dreamstime.com/b/three-beautiful-diverse-girls-posing-together-smiling-looking-camera-facial-skincare-group-happy-multiethnic-women-203904921.jpg",
    "https://thumbs.dreamstime.com/b/diversity-beauty-portrait-different-ethnicity-women-multi-ethnic-models-standing-together-against-beige-background-three-tender-186544125.jpg",
    "https://cdn.aarp.net/content/dam/aarp/home-and-family/family-and-friends/2021/02/1140-multigenerational-black-family.jpg",
    "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg",
    "https://public.r2.headshotpro-cf.com/headshotpro/reviews/68368c0bcd4a7a8dd0593684-68369a1cb296baa6e5aa1a83-thumbnail.png",
    "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49521/article_aligned%402x.png",
    "https://media.licdn.com/dms/image/v2/C5612AQEWTv3fRjwkSw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1524587440123?e=1773273600&v=beta&t=BGCx3IguIh1HgjMf7sPp7nObh1LODhmOenImR3CqC0o",
    "https://www.myclickmagazine.com/wp-content/uploads/2020/09/leslie-crane-creative-headshots-1-767x548.jpg",
    "https://images.startups.co.uk/wp-content/uploads/2023/11/business-headshots.jpg?width=709&height=460&fit=crop",
    "https://thumbs.dreamstime.com/b/international-group-happy-women-hugging-diversity-race-ethnicity-people-concept-smiling-different-over-white-96381322.jpg",
    "https://media.istockphoto.com/id/1212205509/photo/happy-seniors-collage.jpg?s=612x612&w=0&k=20&c=fdKGAI5fUKDj9js8mz41LM2-GU0xPiBsibX-raR_OXI=",
    "https://thumbs.dreamstime.com/b/team-people-various-ages-genders-ethnicities-casual-everyday-clothes-standing-hands-pockets-looking-camera-203561756.jpg",
    "https://images.pexels.com/photos/30884779/pexels-photo-30884779.jpeg?cs=srgb&dl=pexels-kutloano-motlhake-896407295-30884779.jpg&fm=jpg",
    "https://c8.alamy.com/comp/2WY9X1J/diversity-women-and-girls-with-happiness-on-collage-smiling-and-faces-in-international-group-montage-different-age-and-ethnicity-for-inclusion-2WY9X1J.jpg",
    "https://c8.alamy.com/comp/EN560X/large-group-of-multi-ethnic-diverse-mixed-age-people-celebrating-with-EN560X.jpg",
    "https://c8.alamy.com/comp/2JDCKEF/diversity-people-concept-mosaic-collage-of-a-faces-of-multiracial-group-of-successful-smiling-men-and-women-of-different-ages-expressing-different-emotions-looking-at-the-camera-2JDCKEF.jpg",
  ];


  return (
    <section className="h-auto w-full pt-[200px]">
      <div className="container flex flex-col items-center gap-y-[96px] justify-center">
        <h2 className="text-[73px] font-normal text-black">
          Real stories. Real change.
        </h2>

        <div className="flex flex-col gap-y-12 items-center">
          {/* Row of circular avatars */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-5xl">
            {avatars.map((src, index) => (
              <div
                key={index}
                className="w-20 h-20 md:w-24 md:h-24 lg:w-18 lg:h-18 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`Person ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <span className="text-base font-light text-black opacity-64 leading-[150%]">
            Zaire Press
          </span>
          <p className="text-[30px] max-w-[829px] text-black leading-[142%] font-normal">
            “She never pushed — just asked the right questions. And somehow,
            that was enough for me to find my own pace.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealStories;
