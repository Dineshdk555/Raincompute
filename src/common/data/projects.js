const projects = [
  {
    id: 0,
    img: "img1",
    name: "Johnsnow",
    description: "Antitrust Division (AD)",
    status: "Completed",
    color: "success",
    dueDate: "2022-05-15",
    commentsCount: 214,
    team: [
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
    startDate: "08 may, 2022",
    projectDetails: {
      description:
        "Prior to her tenure at the Department of Justice, Ms. Escalona served as Deputy Solicitor General in the Office of the Attorney General of the State of Alabama, was a visiting assistant professor at the University of Alabama School of Law, and worked in private practice.  Ms. Escalona also served as a law clerk for the Honorable William H. Pryor Jr. on the U.S. Court of Appeals for the Eleventh Circuit.",
      Experience : "7Yrs",
      Skills : "State Court",
      points: [
        "Federal Law Enforcement Focuses on Violent Crime in Tuscaloosa  U.S. Attorney Prim Escalona Recognizes Police Week",
      
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Rain Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Rain Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Rain Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 1,
    img: "img2",
    name: "Walter Vetrivel",
    description: "National Security Division (NSD)",
    status: "Pending",
    color: "warning",
    dueDate: "2019-10-22",
    commentsCount: 183,
    team: [
      // { id: 1, img: "avatar8" ,fullname:"VanduMurugan"},
      // { id: 2, img: "avatar2", fullname: "Daniel Candles"},
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "He was sworn in as the United States Attorney for the Eastern District of Michigan by Chief United States District Judge Denise Page Hood.",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Rain Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Rain Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Rain Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 2,
    img: "img3",
    name: "Tom Allen",
    description: "Civil Rights Division (CRD)",
    status: "Delay",
    color: "danger",
    dueDate: "2019-10-13",
    commentsCount: 175,
    team: [
      // { id: 1, img: "Null", name: "K", color: "info", fullname: "Kony Brafford" },
      // { id: 2, img: "avatar2", fullname: "Daniel Candles" }
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "During his time in the United States Attorney’s Office, Mr. Fowlkes also previously served as the Coordinator for the Organized Crime and Drug Enforcement Task Force (OCDETF) Unit of the USAO, and has prosecuted a variety of criminal cases.  He has also held the positions of Criminal Chief and Senior Litigation Counsel.",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Rain Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Rain Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Rain Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 3,
    img: "img4",
    name: "David C. Weiss",
    description: "Justice Management Division(JMD)",
    status: "Completed",
    color: "success",
    dueDate: "2019-10-14",
    commentsCount: 202,
    team: [
      // { id: 1, img: "avatar4", fullname: "Janice Cole" },
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "During his time in the United States Attorney’s Office, Mr. Fowlkes also previously served as the Coordinator for the Organized Crime and Drug Enforcement Task Force (OCDETF) Unit of the USAO, and has prosecuted a variety of criminal cases.  He has also held the positions of Criminal Chief and Senior Litigation Counsel.",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Rain Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Rain Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Rain Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 4,
    img: "img5",
    name: "Matthew M. Graves",
    description: "Environment and Natural Resources Division (ENRD) ",
    status: "Completed",
    color: "success",
    dueDate: "2019-10-13",
    commentsCount: 194,
    team: [
      // { id: 1, img: "avatar1", fullname: "Jennifer Walker" },
      // { id: 2, img: "avatar3", fullname: "Daniel Candel" },
      // { id: 3, img: "Null", name: "3+", color: "danger" },
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "During his time in the United States Attorney’s Office, Mr. Fowlkes also previously served as the Coordinator for the Organized Crime and Drug Enforcement Task Force (OCDETF) Unit of the USAO, and has prosecuted a variety of criminal cases.  He has also held the positions of Criminal Chief and Senior Litigation Counsel.",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Rain Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Rain Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Rain Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 5,
    img: "img6",
    name: "Jason R. Coody ",
    description: "Justice Management Division (JMD)",
    status: "Pending",
    color: "warning",
    dueDate: "2019-10-24",
    commentsCount: 222,
    team: [
      // { id: 1, img: "avatar4", fullname: "Janice Cole" },
      // { id: 2, img: "avatar5", fullname: "Steve Foster" },
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "During his time in the United States Attorney’s Office, Mr. Fowlkes also previously served as the Coordinator for the Organized Crime and Drug Enforcement Task Force (OCDETF) Unit of the USAO, and has prosecuted a variety of criminal cases.  He has also held the positions of Criminal Chief and Senior Litigation Counsel.",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Rain Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Rain Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Rain Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 6,
    img: "img3",
    name: "Duston J. Slinkard ",
    description: "Environment and Natural Resources Division (ENRD)",
    status: "Delay",
    color: "danger",
    dueDate: "2019-10-15",
    commentsCount: 214,
    team: [
      // { id: 1, img: "avatar5", fullname: "Steve Foster" },
      // { id: 3, img: "Null", name: "R", color: "warning", fullname: "Rony Candles" },
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
  },
  {
    id: 7,
    img: "img3",
    name: "Ryan K. Buchanan",
    description: "Environment and Natural Resources Division (ENRD)",
    status: "Delay",
    color: "danger",
    dueDate: "2019-10-15",
    commentsCount: 214,
    team: [
      // { id: 1, img: "avatar5", fullname: "Steve Foster" },
      // { id: 3, img: "Null", name: "R", color: "warning", fullname: "Rony Candles" },
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
  },
  {
    id: 8,
    img: "img3",
    name: "Shawn N. Anderson",
    description: "Criminal Division (CD)",
    status: "Completed",
    color: "success",
    dueDate: "11 Oct, 19",
    commentsCount: 185,
    team: [
      // { id: 1, img: "Null", name: "L", color: "pink", fullname: "Lony Mackay" },
      // { id: 3, img: "avatar2", fullname: "Daniel Candles" },
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "During his time in the United States Attorney’s Office, Mr. Fowlkes also previously served as the Coordinator for the Organized Crime and Drug Enforcement Task Force (OCDETF) Unit of the USAO, and has prosecuted a variety of criminal cases.  He has also held the positions of Criminal Chief and Senior Litigation Counsel.",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Rain Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Rain Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Rain Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 9,
    img: "img3",
    name: "Gregory K. Harris",
    description: "National Security Division (NSD).",
    status: "Completed",
    color: "success",
    dueDate: "2019-10-12",
    commentsCount: 106,
    team: [
      // { id: 1, img: "avatar4", fullname: "Janice Cole" },
      // { id: 2, img: "avatar5", fullname: "Steve Foster" },
      // { id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker" },
      // { id: 3, img: "avatar2", fullname: "Daniel Candles" },
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "During his time in the United States Attorney’s Office, Mr. Fowlkes also previously served as the Coordinator for the Organized Crime and Drug Enforcement Task Force (OCDETF) Unit of the USAO, and has prosecuted a variety of criminal cases.  He has also held the positions of Criminal Chief and Senior Litigation Counsel.",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Rain Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Rain Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Rain Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 10,
    img: "img4",
    name: "Brandon B. Brown ",
    description: "Criminal Division",
    status: "Completed",
    color: "success",
    dueDate: "11 Oct, 19",
    commentsCount: 185,
    team: [
      // { id: 1, img: "Null", name: "L", color: "pink", fullname: "Lony Mackay" },
      // { id: 3, img: "avatar2", fullname: "Daniel Candles" },
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "During his time in the United States Attorney’s Office, Mr. Fowlkes also previously served as the Coordinator for the Organized Crime and Drug Enforcement Task Force (OCDETF) Unit of the USAO, and has prosecuted a variety of criminal cases.  He has also held the positions of Criminal Chief and Senior Litigation Counsel.",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Rain Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Rain Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Rain Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 11,
    img: "img2",
    name: "James C. Clay Joyner",
    description: "Criminal Division (CD)",
    status: "Completed",
    color: "success",
    dueDate: "11 Oct, 19",
    commentsCount: 185,
    team: [
      // { id: 1, img: "Null", name: "L", color: "pink", fullname: "Lony Mackay" },
      // { id: 3, img: "avatar2", fullname: "Daniel Candles" },
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Assistant Attorney" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Assistant" },
          { id: 2, name: "Attorney" },
        ],
      },
      {
        id: 5, img: "avatar6", fullname: "Steve Jobs",
        skills: [
          { id: 1, name: "Assistant Attorney" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "During his time in the United States Attorney’s Office, Mr. Fowlkes also previously served as the Coordinator for the Organized Crime and Drug Enforcement Task Force (OCDETF) Unit of the USAO, and has prosecuted a variety of criminal cases.  He has also held the positions of Criminal Chief and Senior Litigation Counsel.",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Rain Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Rain Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Rain Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  
]

const options = {
  chart: {
    height: 290,
    type: "bar",
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "14%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: !1,
  },
  series: [
    {
      name: "Overview",
      data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
    },
  ],
  grid: {
    yaxis: {
      lines: {
        show: !1,
      },
    },
  },
  yaxis: {
    title: {
      text: "% (Percentage)",
    },
  },
  xaxis: {
    labels: {
      rotate: -90,
    },
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    title: {
      text: "Week",
    },
  },
  colors: ["#556ee6"],
}

const series = [
  {
    name: "Overview",
    data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
  },
]

export { projects, options, series }
