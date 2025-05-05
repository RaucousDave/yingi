// PressSection.jsx
export default function Press() {
  const pressLinks = [
    {
      outlet: "The World's Satellite",
      title: "Yingi’s Musical Journey with Waterside Girl EP",
      url: "https://theworldsatellite.com/2024/04/26/yingis-musical-journey-with-waterside-girl-ep/",
      type: "Article",
      date: "April 26, 2024",
    },
    {
      outlet: "News Express Nigeria",
      title: "Rising Star Yingi Solidifies Position with Waterside Girl EP",
      url: "https://www.newsexpressngr.com/news/224054/rising-star-yingi-solidifies-position-with-waterside-girl-ep",
      type: "Feature",
      date: "April 2024",
    },
    {
      outlet: "The News Chronicle",
      title: "Waterside Girl EP – Tagged Coverage",
      url: "https://thenews-chronicle.com/tag/waterside-girl/",
      type: "Tag Page",
      date: "2024",
    },
  ];

  return (
    <section className="bg-burnt py-[100px] px-6 text-center" id="press">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 font-heading text-black">Press & Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {pressLinks.map((press, index) => (
            <a
              key={index}
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:shadow-xl transition-shadow p-6 rounded-xl border border-gray-200 text-left group"
            >
              <h3 className="font-semibold text-lg text-highlight font-heading group-hover:underline">{press.outlet}</h3>
              <p className="text-gray-700 font-body">{press.title}</p>
              <p className="text-sm text-gray-500 mt-2 font-body">{press.type} • {press.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
