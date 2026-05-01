var GOHAM_CONFIG = {

  /* ============================================================
     CHURCH INFO
     Basic details used across the whole site (name, address,
     contact info, and social media links).
  ============================================================ */
  "church": {
    "name":      "GOHAM Church",
    "address":   "GOHAM HQ — Kwacha East, Milambo Rd, Kitwe, Zambia",
    "phone":     "+260 961 227 416",
    "email":     "gohamtvzambia@gmail.com",
    "whatsapp":  "+260 961 227 416",
    "youtube":   "https://www.youtube.com/@GOHAMHQ",
    "facebook":  "https://www.facebook.com/gohamhq"
  },

  /* ============================================================
     HERO SECTION
     The main banner text shown on the homepage.
  ============================================================ */
  "hero": {
    "eyebrow":  "Welcome to GOHAM",
    "title":    "Gates of Heaven Almighty Ministries International",
    "subtitle": "A place of worship, community, and grace for all who seek Jesus Christ."
  },

  /* ============================================================
     SERVICE TIMES
     Quick-reference times used in the services summary block.
  ============================================================ */
  "services": {
    "sunday_morning":            "08:00 – 14:00",
    "friday_evening":            "15:00 – 18:00",
    "womens_ministry_thursday":  "14:00 – 18:00"
  },

  /* ============================================================
     WEEKLY SCHEDULE
     Powers the schedule table on programs.html.
     Each entry needs: day, service, time.
  ============================================================ */
  "schedule": [
    { "day": "Sunday",             "service": "Sunday Service",      "time": "08:00 – 14:00" },
    { "day": "Sunday",             "service": "Sunday School",        "time": "10:00 – 11:00" },
    { "day": "Sunday",             "service": "Youth Ministry",       "time": "14:00 – 15:30" },
    { "day": "Monday",             "service": "Monday Intercessory",  "time": "16:00 – 18:00" },
    { "day": "Tuesday & Saturday", "service": "Praise Rehearsals",    "time": "15:00 – 18:00" },
    { "day": "Thursday",           "service": "Women's Meeting",      "time": "14:00 – 18:00" },
    { "day": "Friday",             "service": "Prophetic Service",    "time": "15:00 – 18:00" },
    { "day": "Saturday",           "service": "Ushers Meeting",       "time": "15:00 – 18:00" }
  ],

  /* ============================================================
     DEPARTMENTS
     Each department card on programs.html.
     images: list the filenames of photos for that department's
             carousel — add as many as you like, minimum 3.
             All files should live in the images/ folder.
  ============================================================ */
  "departments": [
    {
      "id":       "sunday-school",
      "eyebrow":  "Children's Ministry",
      "title":    "Sunday School",
      "day":      "Every Sunday",
      "time":     "10:00 – 11:00",
      "images": [
        "images/sunday-school-1.jpg",
        "images/sunday-school-2.jpg",
        "images/sunday-school-3.jpg"
      ]
    },
    {
      "id":       "intercessory",
      "eyebrow":  "Prayer Ministry",
      "title":    "Goham Intercessory",
      "day":      "Weekly Intercession",
      "time":     "Monday · 16:00 – 18:00",
      "images": [
        "images/intercessory-1.jpg"
      ]
    },
    {
      "id":       "youth",
      "eyebrow":  "Young People's Ministry",
      "title":    "Youth Ministry",
      "day":      "Sunday — After Service",
      "time":     "14:00 – 15:30",
      "images": [
        "images/youth-1.jpg",
        "images/youth-2.jpg",
        "images/youth-3.jpg"
      ]
    },
    {
      "id":       "worship-team",
      "eyebrow":  "Music & Worship",
      "title":    "Worship Team",
      "day":      "Tuesday & Saturday",
      "time":     "15:00 – 18:00",
      "images": [
        "images/worship-1.mp4",
        "images/worship-2.jpg",
        "images/worship-3.jpg",
        "images/worship-4.jpg"
      ]
    }
  ],

  /* ============================================================
     EVENTS
     Upcoming or current events shown on the homepage events
     section. Each entry needs: title, date, desc, image.
  ============================================================ */
  "events": [
    {
      "title": "Month of Unconditional Love",
      "date":  "April 2026",
      "desc":  "Join us this April as we celebrate God's unconditional love through worship, prayer, and community.",
      "image": "images/event-1.jpg"
    },
    {
      "title": "Harvest Sunday Service",
      "date":  "May 3, 2026",
      "desc":  "An evening of thanksgiving, music, and fellowship. Bring the whole family.",
      "image": "images/event-2.jpg"
    },
    {
      "title": "Youth Camp 2026",
      "date":  "2026",
      "desc":  "An exciting week away for teens and young adults. Registration opens soon.",
      "image": "images/event-3.jpg"
    }
  ],

  /* ============================================================
     ABOUT
     The church history and mission blurb shown on the homepage.
  ============================================================ */
  "about": {
    "history": "Founded January 3rd 2016, GOHAM Community Church has been a cornerstone of faith and community in our region. What began as a small gathering of believers has grown into a vibrant congregation united by love, service, and the living Word of Jesus Christ.",
    "extra":   "We believe that every person has worth and dignity, and that Jesus is the hope of the world. Through Him, our doors are open to all."
  },

  /* ============================================================
     PASTOR
     Lead pastor profile shown on the homepage and team page.
  ============================================================ */
  "pastor": {
    "name":  "Bishop Simon K Christic",
    "role":  "Bishop",
    "bio":   "Serving GOHAM Community Church since 2016, Bishop Simon leads with a heart for the community and a passion for Biblical teaching.",
    "photo": "images/teams/SimonKolando"
  },

  /* ============================================================
     CORE VALUES
     The three pillars shown in the values/mission section.
     icon: SVG path string for the value icon.
  ============================================================ */
  "values": [
    {
      "title": "Worship",
      "desc":  "We gather to honour Jesus through heartfelt worship, prayer, and the study of Scripture together as a family of believers.",
      "icon":  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    },
    {
      "title": "Community",
      "desc":  "We are stronger together in Jesus. Through fellowship, small groups, and shared meals, we build lasting relationships rooted in faith.",
      "icon":  "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
    },
    {
      "title": "Service",
      "desc":  "Faith in Jesus without action is incomplete. We serve our local community through outreach, care programmes, and acts of compassion in His name.",
      "icon":  "M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
    }
  ],

  /* ============================================================
     DONATIONS
     Giving methods displayed in the Give section.
     Each method can have details (text lines) and optional links.
  ============================================================ */
  "donations": [
    {
      "method":  "Bank Transfer / EFT",
      "label":   "Direct Deposit",
      "details": [
        "Bank: Stanbic",
        "Account Name: Simon Kolando and Boniface Chibwabwa",
        "Account No: 9130005952186",
        "Branch Code: 040514",
        "Swift Code: SBICZMLX"
      ]
    },
    {
      "method":  "Mobile Money",
      "label":   "AirTel / MTN Mobile",
      "details": [
        "AirTel: To Be Announced",
        "MTN: 0967243950",
        "Registered to: Boniface Chibwabwa"
      ]
    },
    {
      "method":  "Online Payment",
      "label":   "International Online Giving",
      "details": [
        "PayPal: giving@gohamhq.org"
      ],
      "links": [
        { "url": "#",                          "text": "Give via PayPal →" },
        { "url": "PASTE_FLUTTERWAVE_LINK_HERE","text": "Give via Flutterwave →" }
      ]
    }
  ],

  /* ============================================================
     TEAM
     Full team roster shown on team.html.
     Each member needs: name, role, photo (path in images/).
  ============================================================ */
  "team": [
    { "name": "Bishop Simon K Christic",    "role": "Bishop",                    "photo": "images/teams/SimonKolando"      },
    { "name": "Dr. Reverend Mercy Kolando", "role": "Reverend",                  "photo": "images/teams/MercyKolando"      },
    { "name": "Brother Boniface Chibwabwa", "role": "Financial Minister",        "photo": "images/teams/BonifaceChibwabwa" },
    { "name": "Brother Abel Kolando",       "role": "Minister / Intercessor",    "photo": "images/teams/AbelKolando"       },
    { "name": "Elder Danny Lufundisha",     "role": "Elder",                     "photo": "images/teams/DannyLufundisha"   },
    { "name": "Elder Edith Chipandwe",      "role": "Women's Ministry",          "photo": "images/teams/EdithChipandwe"    },
    { "name": "Sister Keturah Zepeda",      "role": "Women's Ministry",          "photo": "images/teams/KeturahZepeda"     },
    { "name": "Sister Miranda Chipandwe",   "role": "Women's Ministry",          "photo": "images/teams/MirandaChipandwe"  },
    { "name": "Sister Petronella Mutale",   "role": "Women's Ministry",          "photo": "images/teams/PetronellaMutale"  },
    { "name": "Sister Sandra Batala",       "role": "Youth Leader / Usher",      "photo": "images/teams/SandraBatala"      },
    { "name": "Sister Rebecca Phiri",       "role": "Women's Ministry",          "photo": "images/teams/RebeccaPhiri"      },
    { "name": "Brother Abramham Mwape",     "role": "Usher / Intercessor",       "photo": "images/teams/AbramhamMwape"     },
    { "name": "Brother Daniel Gumbo",       "role": "Media Team",                "photo": "images/teams/DanielGumbo"       },
    { "name": "Brother James Mutale",       "role": "Media Team",                "photo": "images/teams/JamesMutale"       },
    { "name": "Sister Annet Chanda",        "role": "Media Team",                "photo": "images/teams/AnnetChanda"       },
    { "name": "Brother Gabriel Zepeda",     "role": "Disciple",                  "photo": "images/teams/GabrielZepeda"     }
  ],

  /* ============================================================
     IMAGES
     Shared image assets used site-wide (logo, hero banners).
     To swap an image, just change the path here.
  ============================================================ */
  "images": {
    "logo":    "images/GohamLight.png",
    "banner1": "images/banner.jpg",
    "banner2": "images/banner-2.jpg",

    /* ── BANNER REEL ──────────────────────────────────────────
       Images and videos that scroll across the reel strip just
       below the hero on the homepage.
       - Images: extension optional, resolver will find the file.
       - Videos: extension required (e.g. .mp4, .webm, .mov).
       Add as many items as you like — they loop seamlessly.
    ──────────────────────────────────────────────────────────── */
    "bannerReel": [
      "images/reel-1",
      "images/reel-2",
      "images/reel-3",
      "images/reel-4",
      "images/reel-5"
    ]
  }

};