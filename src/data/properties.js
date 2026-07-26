const properties = [
  {
    id: 1,
    title: "The Emerald Villa",
    location: "Banana Island, Lagos",
    price: "₦450,000,000",
    beds: 5,
    baths: 6,
    size: "1,200 m²",
    tag: "For Sale",
    tagColor: "bg-secondary-fixed text-on-secondary-fixed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA43g1AJvlXYwUer9yjBd6d7zYyQrl9zgGFEM_UBsDxcBHvNqnwH6SINrtkJR2xTDSJqof5fqfwjzmOxgNM_RK1tl_7Puq-dwXlWD9Mh_XUMHTj8FXrgGQSCLuuiwIFdq__416PSEDzEMKZV0JZruQk2F_Icv-M3TYkLdhAPqOvSC_cCZ6ekTKCEZzHqo2pVt3B6KaOI2tg0lIfiFbfjfLROUVy8RiIeT_4eIOPGEwo4wrXGTkNCg8v_9-08WTL2HVI52fJaOeH_rs",
  },
  {
    id: 2,
    title: "Skyline Penthouse",
    location: "Victoria Island, Lagos",
    price: "₦120,000,000",
    beds: 3,
    baths: 4,
    size: "450 m²",
    tag: "Featured",
    tagColor: "bg-primary text-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1yG5FRX9JlUpHPeprOJG1o-MqK0HxnZkcrco0-0_3JnwbuuOd5YVhjXTMTcFqhuadNLvwVvSKq4sQQCrPxBtf4I74_tQOYtf3E2U8huLM5herRQYGlTicyYKhpmGeOSeBfMbZBvnf045Kaeb2sMk19Wjop8epUSlGysmcPWtbv3SUDErooxGPOeXUk6SFp9zCkqYs4mH-cVb8p8dZBIOZWd7rGCHqJs8kwC4lJ--JpIdayYuf7nVfTHrgPfD2F5Zs86RrXZW3xpY",
  },
  {
    id: 3,
    title: "The Heritage Heights",
    location: "Maitama, Abuja",
    price: "₦280,000,000",
    beds: 4,
    baths: 5,
    size: "750 m²",
    tag: "For Sale",
    tagColor: "bg-secondary-fixed text-on-secondary-fixed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXJXbGf3-vzlJTjEXJdMjvP4M0LUWt5mf7n7aQjcO7AadGSRQmLGwFu2eAmtunAfZeDWEx0XHdX8wZhoqZdzYYc-WuEckYBO4UZC24gsLW7FWmi43F70OQTv9uBgBQpBR0-1VEWLInVW4IMrQpji9J-tBeuSKljLo4DVgxWemC-WJJBdsTPJoUvx3eLJEDeA1zoJ5raGvkSIB9aXrNg3tFIlHyuxPkD532FcWhHz_MRlUu63vwQE6O25u4yLHc00SbEp_g2TJeeyE",
  },
  {
    id: 4,
    title: "Coastal Horizon",
    location: "Lekki Phase 1, Lagos",
    price: "₦180,000,000",
    beds: 4,
    baths: 4,
    size: "500 m²",
    tag: "New Listing",
    tagColor: "bg-primary-container text-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5m8-xDEc5ZECmyViXgHT21AEx0x6O0HsBOQAFq8IJf71dUD0QwTqWp3yw2ENxxXyclzO1-MJBThHHMtryn0ukjqUwczgeALRCnSYQDpeE4TLipPeJo6pzW-TfFgztwxD2YiCVMtjT4R0lcNLQ1NncmQdpuLr3pWwcxH-Gpy40VzhPBsYEFEe5Fq5aWOW_uSpdcO3xvnHQ0d9VH3jfvMVZTkyyzo523_gfArb8R9l3NpJ21djrXEIZ5JJlftDza4CLISrD_RSSTWg",
  },
  {
    id: 5,
    title: "The Glass Mansion",
    location: "Ikoyi, Lagos",
    price: "₦650,000,000",
    beds: 6,
    baths: 7,
    size: "1,800 m²",
    tag: "Investment",
    tagColor: "bg-primary text-white",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQbGUnMdEgq3nulVVFRd2N26e8qwa-tabWx2sIqV1ZPBrQTGm-20iybmATrGr5OQlmPGFT0tFvn_TVNWpWMjhAexbihCwgTZz8K-Cse-aI3K-02-AcYv7vE-Jo7qNnBwrNbv0YIeupxnHK9OStmwHz2MfqqF1UuUHwJ1vmfXX_WvouEETj8rN5HpH-z36HKHVUAHAXa9g1SkDn1keD3DmQj2T2yCP9UcWAIfQu3yMrCSimO-GezUesvF-hptEPJJNbUPPuBj-jxG4",
  },
  {
    id: 6,
    title: "Urban Crest Duplexes",
    location: "Ajah, Lagos",
    price: "₦95,000,000",
    beds: 3,
    baths: 3,
    size: "320 m²",
    tag: "Sold Out",
    tagColor: "bg-secondary-fixed text-on-secondary-fixed",
    sold: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_3D3VE-BPPIEsxqff-Sv4LhcM-cnSEx1luL9mOW7hdnooGciH-lE0TihmwbuB9X2a5ficotjMcA_jsQpXStMrdeN15j6ZGF_cb3gs5vkQe7vqDiFKvn78LKQS9Meo6s-0xM7xkEj9T8C9nHmX36dIA4vJBH8u09xEj-6JdjKb-0-V5sQ4XirqgkKY4o_Pt64XZNLArlrBfSq2LM-D1OnzVWBwqkDcZxiOb5UUC-JvAtjHUGJo1WatwSA4a3bHikyvJS9KxSb9z9g",
  },
];

export default properties;
