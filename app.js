/**
 * DRONACHARYA COLLEGE OF ENGINEERING (DCE) CAMPUSPULSE
 * Core Client-Side Logic & State Engine
 */

(function () {
  'use strict';

  // ==========================================
  // INITIAL RICH MOCK DATA (DCE CAMPUS)
  // ==========================================

  const DEFAULT_DATA = {
    theme: 'light',
    user: {
      isLoggedIn: false,
      rollNumber: '',
      mobileNumber: '',
      name: 'Student',
      initials: 'DCE',
      major: 'Dronacharya College of Engineering',
      branch: 'CSE',
      semester: 3,
      id: '',
      groupsCount: 0,
      karma: 100,
      focusMins: 0,
      joinedGroups: [],
      upvotedPosts: []
    },
    spots: [
      {
        id: 's1',
        name: 'DCE Central Library - 3rd Floor (Vedic Silence Hall)',
        building: 'DCE Central Library',
        category: 'quiet',
        occupancy: 24,
        capacity: 160,
        noiseDb: 26,
        noiseTag: 'silent',
        hours: 'Open 24/7 (End-Sem & GATE Season)',
        amenities: ['Strict Silence', 'Power Point Every Desk', 'Fast Wi-Fi / NKN LAN', 'Natural Daylight', 'Ergonomic Wooden Chairs'],
        seatsAvailable: 122
      },
      {
        id: 's2',
        name: 'Aryabhata Computer Centre - Coding & AI Lab',
        building: 'Aryabhata Tech Complex',
        category: 'tech',
        occupancy: 68,
        capacity: 140,
        noiseDb: 46,
        noiseTag: 'moderate',
        hours: 'Open until 2:00 AM',
        amenities: ['Dual-Monitor Workstations', 'Linux Terminals', 'Gigabit Fibre LAN', 'AC Cooling'],
        seatsAvailable: 45
      },
      {
        id: 's3',
        name: 'DCE Main Canteen & Central Nescafe Tapri',
        building: 'Main Canteen & SAC',
        category: 'dining',
        occupancy: 76,
        capacity: 220,
        noiseDb: 64,
        noiseTag: 'lively',
        hours: 'Open until 11:30 PM',
        amenities: ['Sharma Xerox Counter', 'Filter Coffee & Chai Tapri', 'Ample Sockets', 'Garden Verandah'],
        seatsAvailable: 52
      },
      {
        id: 's4',
        name: 'DCE Tinkering Lab & Robotics Bay (Maker Bhavan)',
        building: 'Aryabhata Tech Complex',
        category: 'tech',
        occupancy: 42,
        capacity: 65,
        noiseDb: 40,
        noiseTag: 'moderate',
        hours: 'Open until Midnight',
        amenities: ['Soldering Stations', 'DSO Oscilloscopes', '3D Printers', 'Arduino & Raspberry Pi Kits'],
        seatsAvailable: 38
      },
      {
        id: 's5',
        name: 'Late-Night Nescafe & Maggi Point (Hostel Quad)',
        building: 'DCE Hostel Plaza',
        category: 'dining',
        occupancy: 82,
        capacity: 90,
        noiseDb: 62,
        noiseTag: 'lively',
        hours: 'Open 4:00 PM - 3:30 AM (All Night)',
        amenities: ['Double Cheese Maggi', 'Hot Masala Chai', 'Cold Coffee', 'Outdoor Lawn Seating'],
        seatsAvailable: 16
      },
      {
        id: 's6',
        name: 'DCE Gymkhana & Badminton Sports Arena',
        building: 'DCE Sports Hub',
        category: 'gym',
        occupancy: 48,
        capacity: 120,
        noiseDb: 56,
        noiseTag: 'moderate',
        hours: '6:00 AM - 10:00 PM',
        amenities: ['Wooden Badminton Courts', 'Weightlifting Area', 'Table Tennis Arena', 'Locker Rooms'],
        seatsAvailable: 62
      }
    ],
    groups: [
      {
        id: 'g1',
        course: 'GATE CSE 2027',
        title: 'Algorithms, Discrete Math & TOC Problem Solving',
        host: 'Aarav Sharma',
        category: 'gate',
        meetTime: 'Today, 5:30 PM - 7:30 PM',
        location: 'DCE Library • 2nd Floor Discussion Room',
        maxSeats: 6,
        attendees: ['AS', 'RK', 'VJ', 'PS'],
        desc: 'Solving past 10 years GATE questions on Dynamic Programming, Graph Dijkstra, and Regular Expressions.'
      },
      {
        id: 'g2',
        course: 'SDE DSA SHEET',
        title: 'Striver A2Z DSA Sheet & LeetCode Hard Sprints',
        host: 'Ananya Iyer',
        category: 'cs',
        meetTime: 'Today, 8:00 PM - 10:00 PM',
        location: 'Aryabhata Computer Centre • Terminal Row 3',
        maxSeats: 8,
        attendees: ['AI', 'AS', 'DG', 'MT'],
        desc: 'Focusing on Trees, Heaps, and Graph Traversals for upcoming campus placement tests.'
      },
      {
        id: 'g3',
        course: 'ENGG MATH (M-3)',
        title: 'Laplace Transforms, Fourier Series & Eigenvalues',
        host: 'Rohan Verma',
        category: 'math',
        meetTime: 'Tomorrow, 4:00 PM - 6:00 PM',
        location: 'Academic Block Room 104',
        maxSeats: 7,
        attendees: ['RV', 'SK', 'PM'],
        desc: 'Solving B.S. Grewal Chapter 21 problems and previous year end-sem question papers.'
      },
      {
        id: 'g4',
        course: 'CAT 2026',
        title: 'Quant Arithmetic & DILR Matrix Arrangement Sprint',
        host: 'Priya Nair',
        category: 'cat',
        meetTime: 'Thursday, 6:30 PM - 8:30 PM',
        location: 'DCE Library Cafe Corner',
        maxSeats: 5,
        attendees: ['PN', 'TL'],
        desc: 'Timed 40-minute DILR sectional test followed by joint question analysis.'
      },
      {
        id: 'g5',
        course: 'VLSI & ROBOTICS',
        title: 'e-Yantra Robotics PID Tuning & ROS2 Navigation',
        host: 'Kabir Patel',
        category: 'hardware',
        meetTime: 'Friday, 5:00 PM - 7:30 PM',
        location: 'Maker Bhavan Robotics Bay',
        maxSeats: 4,
        attendees: ['KP', 'NM', 'AB'],
        desc: 'Motor driver calibration and camera sensor integration for national robotics competition.'
      }
    ],
    dining: [
      {
        id: 'd1',
        name: 'Garam Masala Dosa with Sambar & Coconut Chutney',
        location: 'DCE Main Canteen',
        hallKey: 'canteen',
        meal: 'breakfast',
        price: '₹45',
        rating: '4.8',
        reviewsCount: 380,
        calories: 360,
        protein: '8g',
        waitTime: '~3 min wait',
        diets: ['veg', 'jain', 'budget'],
        description: 'Crisp golden fermented crepe filled with spiced mashed potato sabzi, accompanied by piping hot dal sambar.'
      },
      {
        id: 'd2',
        name: 'Special Rajma Chawal with Desi Ghee & Boondi Raita',
        location: 'DCE Central Mess Hall',
        hallKey: 'central',
        meal: 'lunch',
        price: '₹60',
        rating: '4.9',
        reviewsCount: 520,
        calories: 540,
        protein: '22g',
        waitTime: '~4 min wait',
        diets: ['veg', 'protein', 'budget'],
        description: 'Slow-cooked Kashmiri red kidney beans in rich tomato-ginger gravy, served over fragrant basmati rice with pickle and raita.'
      },
      {
        id: 'd3',
        name: 'Hyderabadi Dum Chicken Biryani with Mirchi ka Salan',
        location: 'DCE Main Canteen',
        hallKey: 'canteen',
        meal: 'lunch',
        price: '₹120',
        rating: '4.9',
        reviewsCount: 640,
        calories: 690,
        protein: '38g',
        waitTime: '~6 min wait',
        diets: ['nonveg', 'protein'],
        description: 'Layered spiced basmati rice and tender bone-in chicken marinated in yogurt and saffron, served with spicy gravy and egg.'
      },
      {
        id: 'd4',
        name: 'Paneer Butter Masala Deluxe Thali with 3 Rotis',
        location: 'DCE Central Mess Hall',
        hallKey: 'central',
        meal: 'lunch',
        price: '₹85',
        rating: '4.7',
        reviewsCount: 290,
        calories: 610,
        protein: '24g',
        waitTime: '~5 min wait',
        diets: ['veg', 'jain', 'protein'],
        description: 'Fresh paneer cubes in creamy tomato cashew butter makhani, yellow tadka dal, jeera rice, salad, and hot ghee rotis.'
      },
      {
        id: 'd5',
        name: 'Late-Night Double Cheese Tadka Maggi & Masala Chai',
        location: 'Nescafe Tapri & Maggi Point',
        hallKey: 'nescafe',
        meal: 'dinner',
        price: '₹45',
        rating: '4.9',
        reviewsCount: 890,
        calories: 420,
        protein: '11g',
        waitTime: '~4 min wait',
        diets: ['veg', 'budget'],
        description: 'Campus classic: two cakes of Maggi cooked with green chillies, onions, tomatoes, and topped with melted Amul processed cheese.'
      },
      {
        id: 'd6',
        name: 'Egg Fried Rice with Crispy Chilli Paneer Gravy',
        location: 'Late Night Hostel Canteen',
        hallKey: 'night',
        meal: 'dinner',
        price: '₹80',
        rating: '4.6',
        reviewsCount: 210,
        calories: 580,
        protein: '26g',
        waitTime: '~7 min wait',
        diets: ['nonveg', 'protein'],
        description: 'Wok-tossed basmati rice with farm-fresh scrambled eggs, spring onions, paired with spicy Indo-Chinese chilli paneer.'
      }
    ],
    amenityPins: [
      { id: 'p-xerox-1', type: 'xerox', name: 'Sharma 24/7 Xerox & Spiral Binding', loc: 'Main Canteen Ground Floor', x: 210, y: 350, icon: '🖨️', desc: '₹1.50/page laser printing, spiral binding ₹25, lab manuals & thesis printing. Accepts all UPI.' },
      { id: 'p-xerox-2', type: 'xerox', name: 'Aryabhata Print Station', loc: 'Aryabhata 1st Floor Foyer', x: 740, y: 340, icon: '🖨️', desc: 'A0/A1 research poster plotter, colour Xerox, project report binding.' },
      { id: 'p-maggi-1', type: 'maggi', name: 'Hostel Quad Maggi & Chai Point', loc: 'DCE Hostel Quad Gate', x: 670, y: 520, icon: '🍜', desc: 'Famous for Cheese Tadka Maggi, Bun Maska, Kulhad Chai, open till 3:30 AM.' },
      { id: 'p-maggi-2', type: 'maggi', name: 'Central Nescafe Kiosk', loc: 'Central Lawn Verandah', x: 190, y: 290, icon: '☕', desc: 'Iced Frappe, Hot Coffee, Samosas, Patties, Fruit Buns.' },
      { id: 'p-water-1', type: 'water', name: 'AquaGuard RO Chilled Water Station', loc: 'DCE Library Ground Floor', x: 500, y: 175, icon: '💧', desc: 'Four-stage RO purified chilled drinking water cooler.' },
      { id: 'p-water-2', type: 'water', name: 'Sports Complex Water Fountain', loc: 'Gym Entry', x: 290, y: 530, icon: '💧', desc: 'Purified electrolyte-ready water cooler.' },
      { id: 'p-kettle-1', type: 'kettle', name: 'Hostel Kitchen Kettle & Microwave', loc: 'Hostel Block B Lounge', x: 630, y: 530, icon: '🫖', desc: 'Clean electric kettles and microwave oven for midnight snacks.' },
      { id: 'p-dispensary-1', type: 'dispensary', name: 'DCE Health Dispensary & Ambulance', loc: 'Campus Health Centre', x: 280, y: 180, icon: '🏥', desc: '24/7 resident medical doctor, free emergency medicines, on-call ambulance.' },
      { id: 'p-security-1', type: 'security', name: 'Central Lawn Blue Strobe Security Pole', loc: 'Central Walkway', x: 500, y: 340, icon: '🚨', desc: 'Direct two-way intercom to DCE Security Control Room with CCTV.' }
    ],
    feed: [
      {
        id: 'f1',
        category: 'food',
        badge: '🍕 Free Food Alert',
        author: 'Kunal Singhania',
        authorAvatar: 'KS',
        role: 'ACM DCE Student Chapter Lead',
        timeAgo: '15 mins ago',
        title: '40 Hot Samosas & Kachoris Left at Seminar Hall after Workshop!',
        location: 'Seminar Hall 2 Ground Floor',
        content: 'Leftovers from our evening seminar! Still fresh and warm with mint and tamarind chutney. Come grab them before 5:00 PM!',
        upvotes: 48,
        commentsCount: 12,
        isFood: true
      },
      {
        id: 'f2',
        category: 'lost',
        badge: '🔍 Lost & Found',
        author: 'Meera Deshmukh',
        authorAvatar: 'MD',
        role: 'B.Tech ECE 3rd Year • DCE',
        timeAgo: '32 mins ago',
        title: 'Found DCE ID Card (Roll #23EE042, Aryan Gupta) + Casio 991EX',
        location: 'DCE Central Library Floor 2 Benches',
        content: 'Left behind on Table #14. Deposited securely at the Library Circulation Desk. Bring proof of identity to collect it!',
        upvotes: 24,
        commentsCount: 4,
        isFood: false
      },
      {
        id: 'f3',
        category: 'rides',
        badge: '🚖 Cab Share',
        author: 'Tushar Agarwal',
        authorAvatar: 'TA',
        role: 'Final Year Mech • DCE',
        timeAgo: '1 hour ago',
        title: 'Sharing Cab to IGI Airport / Metro Station this Friday (5:00 PM)',
        location: 'Pickup: DCE Main Gate',
        content: 'Leaving for vacation. Room for 2 students with trolley bags. ₹180 per head split. Message to book a seat!',
        upvotes: 19,
        commentsCount: 8,
        isFood: false
      },
      {
        id: 'f4',
        category: 'academic',
        badge: '📚 Hackathon Teammate',
        author: 'Rhea Sengupta',
        authorAvatar: 'RS',
        role: 'Sophomore IT • DCE',
        timeAgo: '2 hours ago',
        title: 'Need 1 Frontend Developer for Smart India Hackathon (SIH 2026)',
        location: 'Aryabhata Lab / Remote',
        content: 'We have 2 backend ML engineers and our problem statement focuses on Logistics. Internal college deadline is this Saturday!',
        upvotes: 31,
        commentsCount: 9,
        isFood: false
      }
    ],
    market: [
      {
        id: 'm1',
        type: 'engg',
        title: 'Casio fx-991EX ClassWiz Scientific Calculator (Mint Condition)',
        price: '₹750',
        seller: 'Varun Joshi',
        sellerAvatar: 'VJ',
        timeAgo: '2 hours ago',
        desc: 'Original Casio ClassWiz with QR code and matrix equation solver. Used for 2 semesters, screen scratch-free with solar cell working.'
      },
      {
        id: 'm2',
        type: 'books',
        title: 'Higher Engineering Mathematics by B.S. Grewal (44th Edition)',
        price: '₹320',
        seller: 'Sneha Kulkarni',
        sellerAvatar: 'SK',
        timeAgo: '3 hours ago',
        desc: 'Standard reference book for M1, M2, and M3. No torn pages, includes handwritten formula sheet booklet for end-sems.'
      },
      {
        id: 'm3',
        type: 'skills',
        title: 'Skill Barter: C++ & DSA Mentoring for Web3 / Solidity Development',
        price: '🤝 ₹0 Barter',
        seller: 'Rohan Mehra',
        sellerAvatar: 'RM',
        timeAgo: '5 hours ago',
        desc: 'Candidate Master on Codeforces. Happy to coach you in recursion, trees & dynamic programming in exchange for Web3 coaching!'
      },
      {
        id: 'm4',
        type: 'engg',
        title: 'Omega Engineering Mini Drafter + Waterproof Sheet Holder Tube',
        price: '₹280',
        seller: 'Aditya Rao',
        sellerAvatar: 'AR',
        timeAgo: '1 day ago',
        desc: 'Used only in 1st year Engineering Graphics (ED) lab. Clamps tightly, smooth scale rotation, comes with protective bag.'
      },
      {
        id: 'm5',
        type: 'dorm',
        title: 'Pigeon 1.5L Electric Stainless Steel Kettle (Auto Shut-off)',
        price: '₹350',
        seller: 'Karthik Raja',
        sellerAvatar: 'KR',
        timeAgo: '2 days ago',
        desc: 'Perfect for late-night hostel Maggi, black coffee, and boiled eggs. Heats up in 90 seconds, excellent working condition.'
      },
      {
        id: 'm6',
        type: 'free',
        title: 'Free Gate Academy 15 Years CSE Solved Papers + Made Easy Handbooks',
        price: 'FREE',
        seller: 'Divya Nair',
        sellerAvatar: 'DN',
        timeAgo: '2 days ago',
        desc: 'Finished my GATE exams! Free to any junior taking GATE 2027 CSE or IT. Pick up from DCE Hostel Block A.'
      }
    ],
    timetable: [
        {
            "id": "tt-cse3-m1",
            "branch": "CSE",
            "sem": 3,
            "day": "Monday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Ankit Sharma (HOD CSE)",
            "facultyCabin": "Cabin 204B, Aryabhata 2nd Floor",
            "facultyEmail": "ankit.sharma@dronacharya.info",
            "batch": "All",
            "credits": "4 Credits (3-1-0)",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-cse3-m2",
            "branch": "CSE",
            "sem": 3,
            "day": "Monday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Discrete Mathematics",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Cabin 208, Ramanujan Block",
            "facultyEmail": "priyanka.math@dronacharya.info",
            "batch": "All",
            "credits": "4 Credits (3-1-0)",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-cse3-m-tea",
            "branch": "CSE",
            "sem": 3,
            "day": "Monday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Student Center",
            "facultyEmail": "",
            "batch": "All",
            "credits": "15 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-m3",
            "branch": "CSE",
            "sem": 3,
            "day": "Monday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Digital Electronics & Logic Design",
            "subjectCode": "ESC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Cabin 104, ECE Wing",
            "facultyEmail": "neeraj.gupta@dronacharya.info",
            "batch": "All",
            "credits": "3 Credits (3-0-0)",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-cse3-m4",
            "branch": "CSE",
            "sem": 3,
            "day": "Monday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Object Oriented Programming (C++)",
            "subjectCode": "PCC-CSE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Prof. Shweta Malik",
            "facultyCabin": "Cabin 202, Aryabhata Block",
            "facultyEmail": "shweta.malik@dronacharya.info",
            "batch": "All",
            "credits": "3 Credits (3-0-0)",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-cse3-m-lunch",
            "branch": "CSE",
            "sem": 3,
            "day": "Monday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Student Dining Hall",
            "facultyCabin": "Canteen Ground Floor",
            "facultyEmail": "",
            "batch": "All",
            "credits": "45 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-m5-6",
            "branch": "CSE",
            "sem": 3,
            "day": "Monday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Data Structures Lab (B1) / Digital Electronics Lab (B2)",
            "subjectCode": "LC-CSE-207",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Turing PC Lab 3 (B1) | Faraday Hardware Lab (B2)",
            "faculty": "Dr. Ankit Sharma & Lab Instructors",
            "facultyCabin": "Turing Lab Office",
            "facultyEmail": "dsa.lab@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "2 Credits (0-0-3)",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-cse3-m7",
            "branch": "CSE",
            "sem": 3,
            "day": "Monday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "GATE CSE 2027 Aptitude & Remedial Tutorial",
            "subjectCode": "TUT-CSE-201",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & SDE Prep",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Prof. Rajiv Mehra",
            "facultyCabin": "Placement Cell",
            "facultyEmail": "placement@dronacharya.info",
            "batch": "All",
            "credits": "1 Credit",
            "notesId": "note-cse-daa-pyq"
        },
        {
            "id": "tt-cse3-t1",
            "branch": "CSE",
            "sem": 3,
            "day": "Tuesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Discrete Mathematics",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Cabin 208, Ramanujan Block",
            "facultyEmail": "priyanka.math@dronacharya.info",
            "batch": "All",
            "credits": "4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-cse3-t2",
            "branch": "CSE",
            "sem": 3,
            "day": "Tuesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Ankit Sharma",
            "facultyCabin": "Cabin 204B",
            "facultyEmail": "ankit.sharma@dronacharya.info",
            "batch": "All",
            "credits": "4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-cse3-t-tea",
            "branch": "CSE",
            "sem": 3,
            "day": "Tuesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Student Center",
            "facultyEmail": "",
            "batch": "All",
            "credits": "15 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-t3",
            "branch": "CSE",
            "sem": 3,
            "day": "Tuesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Digital Electronics & Logic Design",
            "subjectCode": "ESC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Cabin 104, ECE Wing",
            "facultyEmail": "neeraj.gupta@dronacharya.info",
            "batch": "All",
            "credits": "3 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-cse3-t4",
            "branch": "CSE",
            "sem": 3,
            "day": "Tuesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Universal Human Values & Professional Ethics",
            "subjectCode": "MC-UHV-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Sunita Kapoor",
            "facultyCabin": "Humanities Cell",
            "facultyEmail": "sunita.k@dronacharya.info",
            "batch": "All",
            "credits": "2 Credits",
            "notesId": ""
        },
        {
            "id": "tt-cse3-t-lunch",
            "branch": "CSE",
            "sem": 3,
            "day": "Tuesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Student Dining Hall",
            "facultyCabin": "Canteen Ground Floor",
            "facultyEmail": "",
            "batch": "All",
            "credits": "45 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-t5-6",
            "branch": "CSE",
            "sem": 3,
            "day": "Tuesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Digital Electronics Lab (B1) / DSA Lab (B2)",
            "subjectCode": "LC-ECE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Faraday Hardware Lab (B1) | Turing Lab 3 (B2)",
            "faculty": "Dr. Neeraj Gupta & Lab Techs",
            "facultyCabin": "Faraday Lab",
            "facultyEmail": "ece.lab@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "2 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-cse3-t7",
            "branch": "CSE",
            "sem": 3,
            "day": "Tuesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Coding Club & Hackathon Mentorship",
            "subjectCode": "CC-CSE-01",
            "type": "placement",
            "typeLabel": "\ud83d\udcbc Placement & Coding",
            "room": "Aryabhata Seminar Hall",
            "faculty": "Prof. Shweta Malik & ACM Leads",
            "facultyCabin": "Cabin 202",
            "facultyEmail": "acm@dronacharya.info",
            "batch": "All",
            "credits": "Non-Credit",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-cse3-w1",
            "branch": "CSE",
            "sem": 3,
            "day": "Wednesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Object Oriented Programming (C++)",
            "subjectCode": "PCC-CSE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Prof. Shweta Malik",
            "facultyCabin": "Cabin 202",
            "facultyEmail": "shweta.malik@dronacharya.info",
            "batch": "All",
            "credits": "3 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-cse3-w2",
            "branch": "CSE",
            "sem": 3,
            "day": "Wednesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Ankit Sharma",
            "facultyCabin": "Cabin 204B",
            "facultyEmail": "ankit.sharma@dronacharya.info",
            "batch": "All",
            "credits": "4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-cse3-w-tea",
            "branch": "CSE",
            "sem": 3,
            "day": "Wednesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Student Center",
            "facultyEmail": "",
            "batch": "All",
            "credits": "15 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-w3",
            "branch": "CSE",
            "sem": 3,
            "day": "Wednesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Discrete Mathematics",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Cabin 208",
            "facultyEmail": "priyanka.math@dronacharya.info",
            "batch": "All",
            "credits": "4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-cse3-w4",
            "branch": "CSE",
            "sem": 3,
            "day": "Wednesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Digital Electronics & Logic Design",
            "subjectCode": "ESC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Cabin 104, ECE Wing",
            "facultyEmail": "neeraj.gupta@dronacharya.info",
            "batch": "All",
            "credits": "3 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-cse3-w-lunch",
            "branch": "CSE",
            "sem": 3,
            "day": "Wednesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Student Dining Hall",
            "facultyCabin": "Canteen Ground Floor",
            "facultyEmail": "",
            "batch": "All",
            "credits": "45 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-w5-6",
            "branch": "CSE",
            "sem": 3,
            "day": "Wednesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "C++ & Python Programming Lab",
            "subjectCode": "LC-CSE-211",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Linus Torvalds Lab 2",
            "faculty": "Prof. Shweta Malik",
            "facultyCabin": "Cabin 202",
            "facultyEmail": "shweta.malik@dronacharya.info",
            "batch": "All Batches",
            "credits": "2 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-cse3-w7",
            "branch": "CSE",
            "sem": 3,
            "day": "Wednesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Library Research & Swayam NPTEL Hour",
            "subjectCode": "LIB-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Silent Library Study",
            "room": "DCE Central Library Reference Wing",
            "faculty": "Chief Librarian Mr. D. Sharma",
            "facultyCabin": "Library 1st Floor",
            "facultyEmail": "library@dronacharya.info",
            "batch": "All",
            "credits": "1 Credit",
            "notesId": ""
        },
        {
            "id": "tt-cse3-th1",
            "branch": "CSE",
            "sem": 3,
            "day": "Thursday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Ankit Sharma",
            "facultyCabin": "Cabin 204B",
            "facultyEmail": "ankit.sharma@dronacharya.info",
            "batch": "All",
            "credits": "4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-cse3-th2",
            "branch": "CSE",
            "sem": 3,
            "day": "Thursday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Object Oriented Programming (C++)",
            "subjectCode": "PCC-CSE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Prof. Shweta Malik",
            "facultyCabin": "Cabin 202",
            "facultyEmail": "shweta.malik@dronacharya.info",
            "batch": "All",
            "credits": "3 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-cse3-th-tea",
            "branch": "CSE",
            "sem": 3,
            "day": "Thursday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Student Center",
            "facultyEmail": "",
            "batch": "All",
            "credits": "15 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-th3",
            "branch": "CSE",
            "sem": 3,
            "day": "Thursday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Discrete Mathematics",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Cabin 208",
            "facultyEmail": "priyanka.math@dronacharya.info",
            "batch": "All",
            "credits": "4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-cse3-th4",
            "branch": "CSE",
            "sem": 3,
            "day": "Thursday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Universal Human Values",
            "subjectCode": "MC-UHV-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Sunita Kapoor",
            "facultyCabin": "Humanities Cell",
            "facultyEmail": "sunita.k@dronacharya.info",
            "batch": "All",
            "credits": "2 Credits",
            "notesId": ""
        },
        {
            "id": "tt-cse3-th-lunch",
            "branch": "CSE",
            "sem": 3,
            "day": "Thursday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Student Dining Hall",
            "facultyCabin": "Canteen Ground Floor",
            "facultyEmail": "",
            "batch": "All",
            "credits": "45 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-th5-6",
            "branch": "CSE",
            "sem": 3,
            "day": "Thursday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Data Structures Advanced Lab & Striver SDE Sheet",
            "subjectCode": "LC-CSE-207",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Turing PC Lab 3",
            "faculty": "Dr. Ankit Sharma & Teaching Assistants",
            "facultyCabin": "Cabin 204B",
            "facultyEmail": "ankit.sharma@dronacharya.info",
            "batch": "All Batches",
            "credits": "2 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-cse3-th7",
            "branch": "CSE",
            "sem": 3,
            "day": "Thursday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Sports & Fitness / Badminton & Table Tennis",
            "subjectCode": "SPO-01",
            "type": "tutorial",
            "typeLabel": "\ud83c\udff8 Campus Sports",
            "room": "DCE Indoor Sports Complex",
            "faculty": "Sports Officer Mr. V. Tyagi",
            "facultyCabin": "Gymnasium Ground Floor",
            "facultyEmail": "sports@dronacharya.info",
            "batch": "All",
            "credits": "Recreation",
            "notesId": ""
        },
        {
            "id": "tt-cse3-f1",
            "branch": "CSE",
            "sem": 3,
            "day": "Friday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Digital Electronics & Logic Design",
            "subjectCode": "ESC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Cabin 104, ECE Wing",
            "facultyEmail": "neeraj.gupta@dronacharya.info",
            "batch": "All",
            "credits": "3 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-cse3-f2",
            "branch": "CSE",
            "sem": 3,
            "day": "Friday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Discrete Mathematics (Tutorial)",
            "subjectCode": "BSC-MATH-201",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Problem Solving Tutorial",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Cabin 208",
            "facultyEmail": "priyanka.math@dronacharya.info",
            "batch": "All",
            "credits": "Tutorial",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-cse3-f-tea",
            "branch": "CSE",
            "sem": 3,
            "day": "Friday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Student Center",
            "facultyEmail": "",
            "batch": "All",
            "credits": "15 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-f3",
            "branch": "CSE",
            "sem": 3,
            "day": "Friday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Ankit Sharma",
            "facultyCabin": "Cabin 204B",
            "facultyEmail": "ankit.sharma@dronacharya.info",
            "batch": "All",
            "credits": "4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-cse3-f4",
            "branch": "CSE",
            "sem": 3,
            "day": "Friday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Object Oriented Programming (C++)",
            "subjectCode": "PCC-CSE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Prof. Shweta Malik",
            "facultyCabin": "Cabin 202",
            "facultyEmail": "shweta.malik@dronacharya.info",
            "batch": "All",
            "credits": "3 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-cse3-f-lunch",
            "branch": "CSE",
            "sem": 3,
            "day": "Friday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Student Dining Hall",
            "facultyCabin": "Canteen Ground Floor",
            "facultyEmail": "",
            "batch": "All",
            "credits": "45 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-f5-6",
            "branch": "CSE",
            "sem": 3,
            "day": "Friday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Hardware Simulation & Multisim Lab",
            "subjectCode": "LC-ECE-213",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Faraday Hardware Lab",
            "faculty": "Dr. Neeraj Gupta & Lab Techs",
            "facultyCabin": "Faraday Lab",
            "facultyEmail": "ece.lab@dronacharya.info",
            "batch": "All Batches",
            "credits": "2 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-cse3-f7",
            "branch": "CSE",
            "sem": 3,
            "day": "Friday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Faculty Mentorship & Attendance Review",
            "subjectCode": "MEN-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Faculty Mentorship",
            "room": "Room 204 (Aryabhata Block)",
            "faculty": "Dr. Ankit Sharma & Class Counselors",
            "facultyCabin": "Cabin 204B",
            "facultyEmail": "mentorship@dronacharya.info",
            "batch": "All",
            "credits": "Mentorship",
            "notesId": ""
        },
        {
            "id": "tt-cse3-s1",
            "branch": "CSE",
            "sem": 3,
            "day": "Saturday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Special Topic: Competitive Programming & LeetCode",
            "subjectCode": "PEC-CSE-01",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Expert Lecture",
            "room": "Aryabhata Auditorium",
            "faculty": "Visiting Tech Architect",
            "facultyCabin": "Guest Lounge",
            "facultyEmail": "training@dronacharya.info",
            "batch": "All",
            "credits": "Enrichment",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-cse3-s2",
            "branch": "CSE",
            "sem": 3,
            "day": "Saturday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "DSA Problem Solving Sprint",
            "subjectCode": "PCC-CSE-203",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Problem Sprint",
            "room": "Aryabhata Auditorium",
            "faculty": "Dr. Ankit Sharma",
            "facultyCabin": "Cabin 204B",
            "facultyEmail": "ankit.sharma@dronacharya.info",
            "batch": "All",
            "credits": "Tutorial",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-cse3-s-tea",
            "branch": "CSE",
            "sem": 3,
            "day": "Saturday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Student Center",
            "facultyEmail": "",
            "batch": "All",
            "credits": "15 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-s3-4",
            "branch": "CSE",
            "sem": 3,
            "day": "Saturday",
            "period": 3,
            "timeSlot": "11:05 - 12:55 PM",
            "startTime": "11:05",
            "endTime": "12:55",
            "subject": "Mini-Project Implementation & GitHub Workshop",
            "subjectCode": "PROJ-CSE-201",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Project Lab (2 Hrs)",
            "room": "Turing PC Lab 3",
            "faculty": "Prof. Shweta Malik & TAs",
            "facultyCabin": "Cabin 202",
            "facultyEmail": "shweta.malik@dronacharya.info",
            "batch": "All Batches",
            "credits": "2 Credits",
            "notesId": "note-it-web-lab"
        },
        {
            "id": "tt-cse3-s-lunch",
            "branch": "CSE",
            "sem": 3,
            "day": "Saturday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Student Dining Hall",
            "facultyCabin": "Canteen Ground Floor",
            "facultyEmail": "",
            "batch": "All",
            "credits": "45 Mins",
            "notesId": ""
        },
        {
            "id": "tt-cse3-s5",
            "branch": "CSE",
            "sem": 3,
            "day": "Saturday",
            "period": 5,
            "timeSlot": "01:40 - 02:45 PM",
            "startTime": "13:40",
            "endTime": "14:45",
            "subject": "Student Clubs, NSS & Cultural Society Meet",
            "subjectCode": "ACT-01",
            "type": "placement",
            "typeLabel": "\ud83d\udcbc Student Activity",
            "room": "Student Activity Center (SAC)",
            "faculty": "Dean Student Welfare",
            "facultyCabin": "SAC Block",
            "facultyEmail": "dsw@dronacharya.info",
            "batch": "All",
            "credits": "Activity",
            "notesId": ""
        },
        {
            "id": "tt-it-mon-1",
            "branch": "IT",
            "sem": 3,
            "day": "Monday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Object Oriented Programming (Java)",
            "subjectCode": "PCC-IT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-mon-2",
            "branch": "IT",
            "sem": 3,
            "day": "Monday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Data Structures using C++",
            "subjectCode": "PCC-IT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Dr. Pooja Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-it-mon-break",
            "branch": "IT",
            "sem": 3,
            "day": "Monday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-mon-3",
            "branch": "IT",
            "sem": 3,
            "day": "Monday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Computer Organization & Architecture",
            "subjectCode": "PCC-IT-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Ritu Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-cn-cheat"
        },
        {
            "id": "tt-it-mon-4",
            "branch": "IT",
            "sem": 3,
            "day": "Monday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Discrete Mathematics",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-it-mon-lunch",
            "branch": "IT",
            "sem": 3,
            "day": "Monday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-mon-5",
            "branch": "IT",
            "sem": 3,
            "day": "Monday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Java OOPs Lab (B1) / Data Structures Lab (B2)",
            "subjectCode": "LC-IT-207",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Ada Lovelace IT Lab 1",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-mon-7",
            "branch": "IT",
            "sem": 3,
            "day": "Monday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Object Oriented Programming (Java) Tutorial & Gate Prep",
            "subjectCode": "TUT-IT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-tue-1",
            "branch": "IT",
            "sem": 3,
            "day": "Tuesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Data Structures using C++",
            "subjectCode": "PCC-IT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Dr. Pooja Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-it-tue-2",
            "branch": "IT",
            "sem": 3,
            "day": "Tuesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Computer Organization & Architecture",
            "subjectCode": "PCC-IT-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Ritu Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-cn-cheat"
        },
        {
            "id": "tt-it-tue-break",
            "branch": "IT",
            "sem": 3,
            "day": "Tuesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-tue-3",
            "branch": "IT",
            "sem": 3,
            "day": "Tuesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Discrete Mathematics",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-it-tue-4",
            "branch": "IT",
            "sem": 3,
            "day": "Tuesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Object Oriented Programming (Java)",
            "subjectCode": "PCC-IT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-tue-lunch",
            "branch": "IT",
            "sem": 3,
            "day": "Tuesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-tue-5",
            "branch": "IT",
            "sem": 3,
            "day": "Tuesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Java OOPs Lab (B1) / Data Structures Lab (B2)",
            "subjectCode": "LC-IT-207",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Ada Lovelace IT Lab 1",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-tue-7",
            "branch": "IT",
            "sem": 3,
            "day": "Tuesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Object Oriented Programming (Java) Tutorial & Gate Prep",
            "subjectCode": "TUT-IT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-wed-1",
            "branch": "IT",
            "sem": 3,
            "day": "Wednesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Computer Organization & Architecture",
            "subjectCode": "PCC-IT-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Ritu Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-cn-cheat"
        },
        {
            "id": "tt-it-wed-2",
            "branch": "IT",
            "sem": 3,
            "day": "Wednesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Discrete Mathematics",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-it-wed-break",
            "branch": "IT",
            "sem": 3,
            "day": "Wednesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-wed-3",
            "branch": "IT",
            "sem": 3,
            "day": "Wednesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Object Oriented Programming (Java)",
            "subjectCode": "PCC-IT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-wed-4",
            "branch": "IT",
            "sem": 3,
            "day": "Wednesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Data Structures using C++",
            "subjectCode": "PCC-IT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Dr. Pooja Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-it-wed-lunch",
            "branch": "IT",
            "sem": 3,
            "day": "Wednesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-wed-5",
            "branch": "IT",
            "sem": 3,
            "day": "Wednesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Java OOPs Lab (B1) / Data Structures Lab (B2)",
            "subjectCode": "LC-IT-207",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Ada Lovelace IT Lab 1",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-wed-7",
            "branch": "IT",
            "sem": 3,
            "day": "Wednesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Object Oriented Programming (Java) Tutorial & Gate Prep",
            "subjectCode": "TUT-IT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-thu-1",
            "branch": "IT",
            "sem": 3,
            "day": "Thursday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Discrete Mathematics",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-it-thu-2",
            "branch": "IT",
            "sem": 3,
            "day": "Thursday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Object Oriented Programming (Java)",
            "subjectCode": "PCC-IT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-thu-break",
            "branch": "IT",
            "sem": 3,
            "day": "Thursday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-thu-3",
            "branch": "IT",
            "sem": 3,
            "day": "Thursday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Data Structures using C++",
            "subjectCode": "PCC-IT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Dr. Pooja Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-it-thu-4",
            "branch": "IT",
            "sem": 3,
            "day": "Thursday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Computer Organization & Architecture",
            "subjectCode": "PCC-IT-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Ritu Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-cn-cheat"
        },
        {
            "id": "tt-it-thu-lunch",
            "branch": "IT",
            "sem": 3,
            "day": "Thursday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-thu-5",
            "branch": "IT",
            "sem": 3,
            "day": "Thursday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Java OOPs Lab (B1) / Data Structures Lab (B2)",
            "subjectCode": "LC-IT-207",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Ada Lovelace IT Lab 1",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-thu-7",
            "branch": "IT",
            "sem": 3,
            "day": "Thursday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Object Oriented Programming (Java) Tutorial & Gate Prep",
            "subjectCode": "TUT-IT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-fri-1",
            "branch": "IT",
            "sem": 3,
            "day": "Friday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Object Oriented Programming (Java)",
            "subjectCode": "PCC-IT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-fri-2",
            "branch": "IT",
            "sem": 3,
            "day": "Friday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Data Structures using C++",
            "subjectCode": "PCC-IT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Dr. Pooja Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-it-fri-break",
            "branch": "IT",
            "sem": 3,
            "day": "Friday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-fri-3",
            "branch": "IT",
            "sem": 3,
            "day": "Friday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Computer Organization & Architecture",
            "subjectCode": "PCC-IT-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Ritu Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-cn-cheat"
        },
        {
            "id": "tt-it-fri-4",
            "branch": "IT",
            "sem": 3,
            "day": "Friday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Discrete Mathematics",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-it-fri-lunch",
            "branch": "IT",
            "sem": 3,
            "day": "Friday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-fri-5",
            "branch": "IT",
            "sem": 3,
            "day": "Friday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Java OOPs Lab (B1) / Data Structures Lab (B2)",
            "subjectCode": "LC-IT-207",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Ada Lovelace IT Lab 1",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-fri-7",
            "branch": "IT",
            "sem": 3,
            "day": "Friday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Object Oriented Programming (Java) Tutorial & Gate Prep",
            "subjectCode": "TUT-IT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-sat-1",
            "branch": "IT",
            "sem": 3,
            "day": "Saturday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Data Structures using C++",
            "subjectCode": "PCC-IT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Dr. Pooja Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-it-sat-2",
            "branch": "IT",
            "sem": 3,
            "day": "Saturday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Computer Organization & Architecture",
            "subjectCode": "PCC-IT-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Ritu Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-cn-cheat"
        },
        {
            "id": "tt-it-sat-break",
            "branch": "IT",
            "sem": 3,
            "day": "Saturday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-sat-3",
            "branch": "IT",
            "sem": 3,
            "day": "Saturday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Discrete Mathematics",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-it-sat-4",
            "branch": "IT",
            "sem": 3,
            "day": "Saturday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Object Oriented Programming (Java)",
            "subjectCode": "PCC-IT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-sat-lunch",
            "branch": "IT",
            "sem": 3,
            "day": "Saturday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-it-sat-5",
            "branch": "IT",
            "sem": 3,
            "day": "Saturday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Java OOPs Lab (B1) / Data Structures Lab (B2)",
            "subjectCode": "LC-IT-207",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Ada Lovelace IT Lab 1",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-it-sat-7",
            "branch": "IT",
            "sem": 3,
            "day": "Saturday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Object Oriented Programming (Java) Tutorial & Gate Prep",
            "subjectCode": "TUT-IT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 301 (IT Block)",
            "faculty": "Prof. Varun Mehra",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "it.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-csit-mon-1",
            "branch": "CSIT",
            "sem": 3,
            "day": "Monday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSIT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-mon-2",
            "branch": "CSIT",
            "sem": 3,
            "day": "Monday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Object Oriented Java",
            "subjectCode": "PCC-CSIT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Nidhi Jain",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-csit-mon-break",
            "branch": "CSIT",
            "sem": 3,
            "day": "Monday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-mon-3",
            "branch": "CSIT",
            "sem": 3,
            "day": "Monday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Digital Electronics",
            "subjectCode": "ESC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-csit-mon-4",
            "branch": "CSIT",
            "sem": 3,
            "day": "Monday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Applied Mathematics-III",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-csit-mon-lunch",
            "branch": "CSIT",
            "sem": 3,
            "day": "Monday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-mon-5",
            "branch": "CSIT",
            "sem": 3,
            "day": "Monday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "DSA & Java Lab (B1) / Logic Design Lab (B2)",
            "subjectCode": "LC-CSIT-205",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "CSIT Cloud Lab",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-mon-7",
            "branch": "CSIT",
            "sem": 3,
            "day": "Monday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Data Structures & Algorithms Tutorial & Gate Prep",
            "subjectCode": "TUT-CSIT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-tue-1",
            "branch": "CSIT",
            "sem": 3,
            "day": "Tuesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Object Oriented Java",
            "subjectCode": "PCC-CSIT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Nidhi Jain",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-csit-tue-2",
            "branch": "CSIT",
            "sem": 3,
            "day": "Tuesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Digital Electronics",
            "subjectCode": "ESC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-csit-tue-break",
            "branch": "CSIT",
            "sem": 3,
            "day": "Tuesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-tue-3",
            "branch": "CSIT",
            "sem": 3,
            "day": "Tuesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Applied Mathematics-III",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-csit-tue-4",
            "branch": "CSIT",
            "sem": 3,
            "day": "Tuesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSIT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-tue-lunch",
            "branch": "CSIT",
            "sem": 3,
            "day": "Tuesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-tue-5",
            "branch": "CSIT",
            "sem": 3,
            "day": "Tuesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "DSA & Java Lab (B1) / Logic Design Lab (B2)",
            "subjectCode": "LC-CSIT-205",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "CSIT Cloud Lab",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-tue-7",
            "branch": "CSIT",
            "sem": 3,
            "day": "Tuesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Data Structures & Algorithms Tutorial & Gate Prep",
            "subjectCode": "TUT-CSIT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-wed-1",
            "branch": "CSIT",
            "sem": 3,
            "day": "Wednesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Digital Electronics",
            "subjectCode": "ESC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-csit-wed-2",
            "branch": "CSIT",
            "sem": 3,
            "day": "Wednesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Applied Mathematics-III",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-csit-wed-break",
            "branch": "CSIT",
            "sem": 3,
            "day": "Wednesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-wed-3",
            "branch": "CSIT",
            "sem": 3,
            "day": "Wednesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSIT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-wed-4",
            "branch": "CSIT",
            "sem": 3,
            "day": "Wednesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Object Oriented Java",
            "subjectCode": "PCC-CSIT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Nidhi Jain",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-csit-wed-lunch",
            "branch": "CSIT",
            "sem": 3,
            "day": "Wednesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-wed-5",
            "branch": "CSIT",
            "sem": 3,
            "day": "Wednesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "DSA & Java Lab (B1) / Logic Design Lab (B2)",
            "subjectCode": "LC-CSIT-205",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "CSIT Cloud Lab",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-wed-7",
            "branch": "CSIT",
            "sem": 3,
            "day": "Wednesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Data Structures & Algorithms Tutorial & Gate Prep",
            "subjectCode": "TUT-CSIT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-thu-1",
            "branch": "CSIT",
            "sem": 3,
            "day": "Thursday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Applied Mathematics-III",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-csit-thu-2",
            "branch": "CSIT",
            "sem": 3,
            "day": "Thursday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSIT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-thu-break",
            "branch": "CSIT",
            "sem": 3,
            "day": "Thursday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-thu-3",
            "branch": "CSIT",
            "sem": 3,
            "day": "Thursday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Object Oriented Java",
            "subjectCode": "PCC-CSIT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Nidhi Jain",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-csit-thu-4",
            "branch": "CSIT",
            "sem": 3,
            "day": "Thursday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Digital Electronics",
            "subjectCode": "ESC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-csit-thu-lunch",
            "branch": "CSIT",
            "sem": 3,
            "day": "Thursday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-thu-5",
            "branch": "CSIT",
            "sem": 3,
            "day": "Thursday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "DSA & Java Lab (B1) / Logic Design Lab (B2)",
            "subjectCode": "LC-CSIT-205",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "CSIT Cloud Lab",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-thu-7",
            "branch": "CSIT",
            "sem": 3,
            "day": "Thursday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Data Structures & Algorithms Tutorial & Gate Prep",
            "subjectCode": "TUT-CSIT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-fri-1",
            "branch": "CSIT",
            "sem": 3,
            "day": "Friday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSIT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-fri-2",
            "branch": "CSIT",
            "sem": 3,
            "day": "Friday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Object Oriented Java",
            "subjectCode": "PCC-CSIT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Nidhi Jain",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-csit-fri-break",
            "branch": "CSIT",
            "sem": 3,
            "day": "Friday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-fri-3",
            "branch": "CSIT",
            "sem": 3,
            "day": "Friday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Digital Electronics",
            "subjectCode": "ESC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-csit-fri-4",
            "branch": "CSIT",
            "sem": 3,
            "day": "Friday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Applied Mathematics-III",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-csit-fri-lunch",
            "branch": "CSIT",
            "sem": 3,
            "day": "Friday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-fri-5",
            "branch": "CSIT",
            "sem": 3,
            "day": "Friday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "DSA & Java Lab (B1) / Logic Design Lab (B2)",
            "subjectCode": "LC-CSIT-205",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "CSIT Cloud Lab",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-fri-7",
            "branch": "CSIT",
            "sem": 3,
            "day": "Friday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Data Structures & Algorithms Tutorial & Gate Prep",
            "subjectCode": "TUT-CSIT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-sat-1",
            "branch": "CSIT",
            "sem": 3,
            "day": "Saturday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Object Oriented Java",
            "subjectCode": "PCC-CSIT-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Nidhi Jain",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-csit-oops-theory"
        },
        {
            "id": "tt-csit-sat-2",
            "branch": "CSIT",
            "sem": 3,
            "day": "Saturday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Digital Electronics",
            "subjectCode": "ESC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-csit-sat-break",
            "branch": "CSIT",
            "sem": 3,
            "day": "Saturday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-sat-3",
            "branch": "CSIT",
            "sem": 3,
            "day": "Saturday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Applied Mathematics-III",
            "subjectCode": "BSC-MATH-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Prof. Priyanka Rao",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-csit-sat-4",
            "branch": "CSIT",
            "sem": 3,
            "day": "Saturday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Data Structures & Algorithms",
            "subjectCode": "PCC-CSIT-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-sat-lunch",
            "branch": "CSIT",
            "sem": 3,
            "day": "Saturday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-csit-sat-5",
            "branch": "CSIT",
            "sem": 3,
            "day": "Saturday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "DSA & Java Lab (B1) / Logic Design Lab (B2)",
            "subjectCode": "LC-CSIT-205",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "CSIT Cloud Lab",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-csit-sat-7",
            "branch": "CSIT",
            "sem": 3,
            "day": "Saturday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Data Structures & Algorithms Tutorial & Gate Prep",
            "subjectCode": "TUT-CSIT-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 205 (Aryabhata Block)",
            "faculty": "Dr. Sandeep Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "csit.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-cse-ds-lab"
        },
        {
            "id": "tt-ece-mon-1",
            "branch": "ECE",
            "sem": 3,
            "day": "Monday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Analog Circuits & Devices",
            "subjectCode": "PCC-ECE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-mon-2",
            "branch": "ECE",
            "sem": 3,
            "day": "Monday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Signals and Systems",
            "subjectCode": "PCC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Manoj Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-signals-theory"
        },
        {
            "id": "tt-ece-mon-break",
            "branch": "ECE",
            "sem": 3,
            "day": "Monday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-mon-3",
            "branch": "ECE",
            "sem": 3,
            "day": "Monday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Digital Electronics & Logic",
            "subjectCode": "PCC-ECE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-mon-4",
            "branch": "ECE",
            "sem": 3,
            "day": "Monday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Network Theory & Analysis",
            "subjectCode": "ESC-EE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-ece-mon-lunch",
            "branch": "ECE",
            "sem": 3,
            "day": "Monday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-mon-5",
            "branch": "ECE",
            "sem": 3,
            "day": "Monday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Analog Electronics Lab (B1) / Digital Circuit Lab (B2)",
            "subjectCode": "LC-ECE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Faraday ECE Lab",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-mon-7",
            "branch": "ECE",
            "sem": 3,
            "day": "Monday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Analog Circuits & Devices Tutorial & Gate Prep",
            "subjectCode": "TUT-ECE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-tue-1",
            "branch": "ECE",
            "sem": 3,
            "day": "Tuesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Signals and Systems",
            "subjectCode": "PCC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Manoj Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-signals-theory"
        },
        {
            "id": "tt-ece-tue-2",
            "branch": "ECE",
            "sem": 3,
            "day": "Tuesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Digital Electronics & Logic",
            "subjectCode": "PCC-ECE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-tue-break",
            "branch": "ECE",
            "sem": 3,
            "day": "Tuesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-tue-3",
            "branch": "ECE",
            "sem": 3,
            "day": "Tuesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Network Theory & Analysis",
            "subjectCode": "ESC-EE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-ece-tue-4",
            "branch": "ECE",
            "sem": 3,
            "day": "Tuesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Analog Circuits & Devices",
            "subjectCode": "PCC-ECE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-tue-lunch",
            "branch": "ECE",
            "sem": 3,
            "day": "Tuesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-tue-5",
            "branch": "ECE",
            "sem": 3,
            "day": "Tuesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Analog Electronics Lab (B1) / Digital Circuit Lab (B2)",
            "subjectCode": "LC-ECE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Faraday ECE Lab",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-tue-7",
            "branch": "ECE",
            "sem": 3,
            "day": "Tuesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Analog Circuits & Devices Tutorial & Gate Prep",
            "subjectCode": "TUT-ECE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-wed-1",
            "branch": "ECE",
            "sem": 3,
            "day": "Wednesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Digital Electronics & Logic",
            "subjectCode": "PCC-ECE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-wed-2",
            "branch": "ECE",
            "sem": 3,
            "day": "Wednesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Network Theory & Analysis",
            "subjectCode": "ESC-EE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-ece-wed-break",
            "branch": "ECE",
            "sem": 3,
            "day": "Wednesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-wed-3",
            "branch": "ECE",
            "sem": 3,
            "day": "Wednesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Analog Circuits & Devices",
            "subjectCode": "PCC-ECE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-wed-4",
            "branch": "ECE",
            "sem": 3,
            "day": "Wednesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Signals and Systems",
            "subjectCode": "PCC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Manoj Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-signals-theory"
        },
        {
            "id": "tt-ece-wed-lunch",
            "branch": "ECE",
            "sem": 3,
            "day": "Wednesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-wed-5",
            "branch": "ECE",
            "sem": 3,
            "day": "Wednesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Analog Electronics Lab (B1) / Digital Circuit Lab (B2)",
            "subjectCode": "LC-ECE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Faraday ECE Lab",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-wed-7",
            "branch": "ECE",
            "sem": 3,
            "day": "Wednesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Analog Circuits & Devices Tutorial & Gate Prep",
            "subjectCode": "TUT-ECE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-thu-1",
            "branch": "ECE",
            "sem": 3,
            "day": "Thursday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Network Theory & Analysis",
            "subjectCode": "ESC-EE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-ece-thu-2",
            "branch": "ECE",
            "sem": 3,
            "day": "Thursday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Analog Circuits & Devices",
            "subjectCode": "PCC-ECE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-thu-break",
            "branch": "ECE",
            "sem": 3,
            "day": "Thursday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-thu-3",
            "branch": "ECE",
            "sem": 3,
            "day": "Thursday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Signals and Systems",
            "subjectCode": "PCC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Manoj Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-signals-theory"
        },
        {
            "id": "tt-ece-thu-4",
            "branch": "ECE",
            "sem": 3,
            "day": "Thursday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Digital Electronics & Logic",
            "subjectCode": "PCC-ECE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-thu-lunch",
            "branch": "ECE",
            "sem": 3,
            "day": "Thursday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-thu-5",
            "branch": "ECE",
            "sem": 3,
            "day": "Thursday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Analog Electronics Lab (B1) / Digital Circuit Lab (B2)",
            "subjectCode": "LC-ECE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Faraday ECE Lab",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-thu-7",
            "branch": "ECE",
            "sem": 3,
            "day": "Thursday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Analog Circuits & Devices Tutorial & Gate Prep",
            "subjectCode": "TUT-ECE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-fri-1",
            "branch": "ECE",
            "sem": 3,
            "day": "Friday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Analog Circuits & Devices",
            "subjectCode": "PCC-ECE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-fri-2",
            "branch": "ECE",
            "sem": 3,
            "day": "Friday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Signals and Systems",
            "subjectCode": "PCC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Manoj Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-signals-theory"
        },
        {
            "id": "tt-ece-fri-break",
            "branch": "ECE",
            "sem": 3,
            "day": "Friday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-fri-3",
            "branch": "ECE",
            "sem": 3,
            "day": "Friday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Digital Electronics & Logic",
            "subjectCode": "PCC-ECE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-fri-4",
            "branch": "ECE",
            "sem": 3,
            "day": "Friday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Network Theory & Analysis",
            "subjectCode": "ESC-EE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-ece-fri-lunch",
            "branch": "ECE",
            "sem": 3,
            "day": "Friday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-fri-5",
            "branch": "ECE",
            "sem": 3,
            "day": "Friday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Analog Electronics Lab (B1) / Digital Circuit Lab (B2)",
            "subjectCode": "LC-ECE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Faraday ECE Lab",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-fri-7",
            "branch": "ECE",
            "sem": 3,
            "day": "Friday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Analog Circuits & Devices Tutorial & Gate Prep",
            "subjectCode": "TUT-ECE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-sat-1",
            "branch": "ECE",
            "sem": 3,
            "day": "Saturday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Signals and Systems",
            "subjectCode": "PCC-ECE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Manoj Kumar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-signals-theory"
        },
        {
            "id": "tt-ece-sat-2",
            "branch": "ECE",
            "sem": 3,
            "day": "Saturday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Digital Electronics & Logic",
            "subjectCode": "PCC-ECE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-sat-break",
            "branch": "ECE",
            "sem": 3,
            "day": "Saturday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-sat-3",
            "branch": "ECE",
            "sem": 3,
            "day": "Saturday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Network Theory & Analysis",
            "subjectCode": "ESC-EE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-ece-sat-4",
            "branch": "ECE",
            "sem": 3,
            "day": "Saturday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Analog Circuits & Devices",
            "subjectCode": "PCC-ECE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-sat-lunch",
            "branch": "ECE",
            "sem": 3,
            "day": "Saturday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ece-sat-5",
            "branch": "ECE",
            "sem": 3,
            "day": "Saturday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Analog Electronics Lab (B1) / Digital Circuit Lab (B2)",
            "subjectCode": "LC-ECE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Faraday ECE Lab",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-ece-sat-7",
            "branch": "ECE",
            "sem": 3,
            "day": "Saturday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Analog Circuits & Devices Tutorial & Gate Prep",
            "subjectCode": "TUT-ECE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 102 (ECE Block)",
            "faculty": "Dr. B. K. Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ece.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-me-mon-1",
            "branch": "ME",
            "sem": 3,
            "day": "Monday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Thermodynamics",
            "subjectCode": "PCC-ME-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-mon-2",
            "branch": "ME",
            "sem": 3,
            "day": "Monday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Kinematics of Machines",
            "subjectCode": "PCC-ME-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Amit Chauhan",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-mon-break",
            "branch": "ME",
            "sem": 3,
            "day": "Monday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-mon-3",
            "branch": "ME",
            "sem": 3,
            "day": "Monday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Manufacturing Processes",
            "subjectCode": "PCC-ME-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-mon-4",
            "branch": "ME",
            "sem": 3,
            "day": "Monday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-ME-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-me-mon-lunch",
            "branch": "ME",
            "sem": 3,
            "day": "Monday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-mon-5",
            "branch": "ME",
            "sem": 3,
            "day": "Monday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Workshop Practice & Lathe Lab (B1) / Material Testing Lab (B2)",
            "subjectCode": "LC-ME-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Central Mechanical Workshop",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-mon-7",
            "branch": "ME",
            "sem": 3,
            "day": "Monday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Thermodynamics Tutorial & Gate Prep",
            "subjectCode": "TUT-ME-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-tue-1",
            "branch": "ME",
            "sem": 3,
            "day": "Tuesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Kinematics of Machines",
            "subjectCode": "PCC-ME-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Amit Chauhan",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-tue-2",
            "branch": "ME",
            "sem": 3,
            "day": "Tuesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Manufacturing Processes",
            "subjectCode": "PCC-ME-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-tue-break",
            "branch": "ME",
            "sem": 3,
            "day": "Tuesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-tue-3",
            "branch": "ME",
            "sem": 3,
            "day": "Tuesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-ME-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-me-tue-4",
            "branch": "ME",
            "sem": 3,
            "day": "Tuesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Thermodynamics",
            "subjectCode": "PCC-ME-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-tue-lunch",
            "branch": "ME",
            "sem": 3,
            "day": "Tuesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-tue-5",
            "branch": "ME",
            "sem": 3,
            "day": "Tuesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Workshop Practice & Lathe Lab (B1) / Material Testing Lab (B2)",
            "subjectCode": "LC-ME-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Central Mechanical Workshop",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-tue-7",
            "branch": "ME",
            "sem": 3,
            "day": "Tuesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Thermodynamics Tutorial & Gate Prep",
            "subjectCode": "TUT-ME-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-wed-1",
            "branch": "ME",
            "sem": 3,
            "day": "Wednesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Manufacturing Processes",
            "subjectCode": "PCC-ME-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-wed-2",
            "branch": "ME",
            "sem": 3,
            "day": "Wednesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-ME-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-me-wed-break",
            "branch": "ME",
            "sem": 3,
            "day": "Wednesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-wed-3",
            "branch": "ME",
            "sem": 3,
            "day": "Wednesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Thermodynamics",
            "subjectCode": "PCC-ME-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-wed-4",
            "branch": "ME",
            "sem": 3,
            "day": "Wednesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Kinematics of Machines",
            "subjectCode": "PCC-ME-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Amit Chauhan",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-wed-lunch",
            "branch": "ME",
            "sem": 3,
            "day": "Wednesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-wed-5",
            "branch": "ME",
            "sem": 3,
            "day": "Wednesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Workshop Practice & Lathe Lab (B1) / Material Testing Lab (B2)",
            "subjectCode": "LC-ME-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Central Mechanical Workshop",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-wed-7",
            "branch": "ME",
            "sem": 3,
            "day": "Wednesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Thermodynamics Tutorial & Gate Prep",
            "subjectCode": "TUT-ME-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-thu-1",
            "branch": "ME",
            "sem": 3,
            "day": "Thursday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-ME-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-me-thu-2",
            "branch": "ME",
            "sem": 3,
            "day": "Thursday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Thermodynamics",
            "subjectCode": "PCC-ME-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-thu-break",
            "branch": "ME",
            "sem": 3,
            "day": "Thursday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-thu-3",
            "branch": "ME",
            "sem": 3,
            "day": "Thursday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Kinematics of Machines",
            "subjectCode": "PCC-ME-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Amit Chauhan",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-thu-4",
            "branch": "ME",
            "sem": 3,
            "day": "Thursday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Manufacturing Processes",
            "subjectCode": "PCC-ME-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-thu-lunch",
            "branch": "ME",
            "sem": 3,
            "day": "Thursday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-thu-5",
            "branch": "ME",
            "sem": 3,
            "day": "Thursday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Workshop Practice & Lathe Lab (B1) / Material Testing Lab (B2)",
            "subjectCode": "LC-ME-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Central Mechanical Workshop",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-thu-7",
            "branch": "ME",
            "sem": 3,
            "day": "Thursday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Thermodynamics Tutorial & Gate Prep",
            "subjectCode": "TUT-ME-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-fri-1",
            "branch": "ME",
            "sem": 3,
            "day": "Friday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Thermodynamics",
            "subjectCode": "PCC-ME-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-fri-2",
            "branch": "ME",
            "sem": 3,
            "day": "Friday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Kinematics of Machines",
            "subjectCode": "PCC-ME-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Amit Chauhan",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-fri-break",
            "branch": "ME",
            "sem": 3,
            "day": "Friday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-fri-3",
            "branch": "ME",
            "sem": 3,
            "day": "Friday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Manufacturing Processes",
            "subjectCode": "PCC-ME-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-fri-4",
            "branch": "ME",
            "sem": 3,
            "day": "Friday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-ME-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-me-fri-lunch",
            "branch": "ME",
            "sem": 3,
            "day": "Friday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-fri-5",
            "branch": "ME",
            "sem": 3,
            "day": "Friday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Workshop Practice & Lathe Lab (B1) / Material Testing Lab (B2)",
            "subjectCode": "LC-ME-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Central Mechanical Workshop",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-fri-7",
            "branch": "ME",
            "sem": 3,
            "day": "Friday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Thermodynamics Tutorial & Gate Prep",
            "subjectCode": "TUT-ME-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-sat-1",
            "branch": "ME",
            "sem": 3,
            "day": "Saturday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Kinematics of Machines",
            "subjectCode": "PCC-ME-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Amit Chauhan",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-sat-2",
            "branch": "ME",
            "sem": 3,
            "day": "Saturday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Manufacturing Processes",
            "subjectCode": "PCC-ME-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-sat-break",
            "branch": "ME",
            "sem": 3,
            "day": "Saturday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-sat-3",
            "branch": "ME",
            "sem": 3,
            "day": "Saturday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-ME-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-me-sat-4",
            "branch": "ME",
            "sem": 3,
            "day": "Saturday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Thermodynamics",
            "subjectCode": "PCC-ME-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-me-sat-lunch",
            "branch": "ME",
            "sem": 3,
            "day": "Saturday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-me-sat-5",
            "branch": "ME",
            "sem": 3,
            "day": "Saturday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Workshop Practice & Lathe Lab (B1) / Material Testing Lab (B2)",
            "subjectCode": "LC-ME-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Central Mechanical Workshop",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-me-sat-7",
            "branch": "ME",
            "sem": 3,
            "day": "Saturday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Thermodynamics Tutorial & Gate Prep",
            "subjectCode": "TUT-ME-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 101 (Mechanical Block)",
            "faculty": "Dr. R. K. Tyagi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "me.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-thermo-pyq"
        },
        {
            "id": "tt-ce-mon-1",
            "branch": "CE",
            "sem": 3,
            "day": "Monday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Surveying & Geomatics",
            "subjectCode": "PCC-CE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-mon-2",
            "branch": "CE",
            "sem": 3,
            "day": "Monday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Fluid Mechanics",
            "subjectCode": "PCC-CE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Kavita Negi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-mon-break",
            "branch": "CE",
            "sem": 3,
            "day": "Monday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-mon-3",
            "branch": "CE",
            "sem": 3,
            "day": "Monday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Building Construction & Materials",
            "subjectCode": "PCC-CE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Er. Manish Tanwar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-mon-4",
            "branch": "CE",
            "sem": 3,
            "day": "Monday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-CE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-mon-lunch",
            "branch": "CE",
            "sem": 3,
            "day": "Monday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-mon-5",
            "branch": "CE",
            "sem": 3,
            "day": "Monday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Surveying & Total Station Lab (B1) / Fluid Mechanics Lab (B2)",
            "subjectCode": "LC-CE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Surveying Field Research Yard",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-mon-7",
            "branch": "CE",
            "sem": 3,
            "day": "Monday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Surveying & Geomatics Tutorial & Gate Prep",
            "subjectCode": "TUT-CE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-tue-1",
            "branch": "CE",
            "sem": 3,
            "day": "Tuesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Fluid Mechanics",
            "subjectCode": "PCC-CE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Kavita Negi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-tue-2",
            "branch": "CE",
            "sem": 3,
            "day": "Tuesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Building Construction & Materials",
            "subjectCode": "PCC-CE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Er. Manish Tanwar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-tue-break",
            "branch": "CE",
            "sem": 3,
            "day": "Tuesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-tue-3",
            "branch": "CE",
            "sem": 3,
            "day": "Tuesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-CE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-tue-4",
            "branch": "CE",
            "sem": 3,
            "day": "Tuesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Surveying & Geomatics",
            "subjectCode": "PCC-CE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-tue-lunch",
            "branch": "CE",
            "sem": 3,
            "day": "Tuesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-tue-5",
            "branch": "CE",
            "sem": 3,
            "day": "Tuesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Surveying & Total Station Lab (B1) / Fluid Mechanics Lab (B2)",
            "subjectCode": "LC-CE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Surveying Field Research Yard",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-tue-7",
            "branch": "CE",
            "sem": 3,
            "day": "Tuesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Surveying & Geomatics Tutorial & Gate Prep",
            "subjectCode": "TUT-CE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-wed-1",
            "branch": "CE",
            "sem": 3,
            "day": "Wednesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Building Construction & Materials",
            "subjectCode": "PCC-CE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Er. Manish Tanwar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-wed-2",
            "branch": "CE",
            "sem": 3,
            "day": "Wednesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-CE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-wed-break",
            "branch": "CE",
            "sem": 3,
            "day": "Wednesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-wed-3",
            "branch": "CE",
            "sem": 3,
            "day": "Wednesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Surveying & Geomatics",
            "subjectCode": "PCC-CE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-wed-4",
            "branch": "CE",
            "sem": 3,
            "day": "Wednesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Fluid Mechanics",
            "subjectCode": "PCC-CE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Kavita Negi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-wed-lunch",
            "branch": "CE",
            "sem": 3,
            "day": "Wednesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-wed-5",
            "branch": "CE",
            "sem": 3,
            "day": "Wednesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Surveying & Total Station Lab (B1) / Fluid Mechanics Lab (B2)",
            "subjectCode": "LC-CE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Surveying Field Research Yard",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-wed-7",
            "branch": "CE",
            "sem": 3,
            "day": "Wednesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Surveying & Geomatics Tutorial & Gate Prep",
            "subjectCode": "TUT-CE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-thu-1",
            "branch": "CE",
            "sem": 3,
            "day": "Thursday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-CE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-thu-2",
            "branch": "CE",
            "sem": 3,
            "day": "Thursday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Surveying & Geomatics",
            "subjectCode": "PCC-CE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-thu-break",
            "branch": "CE",
            "sem": 3,
            "day": "Thursday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-thu-3",
            "branch": "CE",
            "sem": 3,
            "day": "Thursday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Fluid Mechanics",
            "subjectCode": "PCC-CE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Kavita Negi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-thu-4",
            "branch": "CE",
            "sem": 3,
            "day": "Thursday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Building Construction & Materials",
            "subjectCode": "PCC-CE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Er. Manish Tanwar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-thu-lunch",
            "branch": "CE",
            "sem": 3,
            "day": "Thursday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-thu-5",
            "branch": "CE",
            "sem": 3,
            "day": "Thursday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Surveying & Total Station Lab (B1) / Fluid Mechanics Lab (B2)",
            "subjectCode": "LC-CE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Surveying Field Research Yard",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-thu-7",
            "branch": "CE",
            "sem": 3,
            "day": "Thursday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Surveying & Geomatics Tutorial & Gate Prep",
            "subjectCode": "TUT-CE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-fri-1",
            "branch": "CE",
            "sem": 3,
            "day": "Friday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Surveying & Geomatics",
            "subjectCode": "PCC-CE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-fri-2",
            "branch": "CE",
            "sem": 3,
            "day": "Friday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Fluid Mechanics",
            "subjectCode": "PCC-CE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Kavita Negi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-fri-break",
            "branch": "CE",
            "sem": 3,
            "day": "Friday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-fri-3",
            "branch": "CE",
            "sem": 3,
            "day": "Friday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Building Construction & Materials",
            "subjectCode": "PCC-CE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Er. Manish Tanwar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-fri-4",
            "branch": "CE",
            "sem": 3,
            "day": "Friday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-CE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-fri-lunch",
            "branch": "CE",
            "sem": 3,
            "day": "Friday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-fri-5",
            "branch": "CE",
            "sem": 3,
            "day": "Friday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Surveying & Total Station Lab (B1) / Fluid Mechanics Lab (B2)",
            "subjectCode": "LC-CE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Surveying Field Research Yard",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-fri-7",
            "branch": "CE",
            "sem": 3,
            "day": "Friday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Surveying & Geomatics Tutorial & Gate Prep",
            "subjectCode": "TUT-CE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-sat-1",
            "branch": "CE",
            "sem": 3,
            "day": "Saturday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Fluid Mechanics",
            "subjectCode": "PCC-CE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Kavita Negi",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-sat-2",
            "branch": "CE",
            "sem": 3,
            "day": "Saturday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Building Construction & Materials",
            "subjectCode": "PCC-CE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Er. Manish Tanwar",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-sat-break",
            "branch": "CE",
            "sem": 3,
            "day": "Saturday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-sat-3",
            "branch": "CE",
            "sem": 3,
            "day": "Saturday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Strength of Materials",
            "subjectCode": "ESC-CE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Prof. Sumit Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-rcc-theory"
        },
        {
            "id": "tt-ce-sat-4",
            "branch": "CE",
            "sem": 3,
            "day": "Saturday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Surveying & Geomatics",
            "subjectCode": "PCC-CE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-sat-lunch",
            "branch": "CE",
            "sem": 3,
            "day": "Saturday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-ce-sat-5",
            "branch": "CE",
            "sem": 3,
            "day": "Saturday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Surveying & Total Station Lab (B1) / Fluid Mechanics Lab (B2)",
            "subjectCode": "LC-CE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Surveying Field Research Yard",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-ce-sat-7",
            "branch": "CE",
            "sem": 3,
            "day": "Saturday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Surveying & Geomatics Tutorial & Gate Prep",
            "subjectCode": "TUT-CE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 105 (Civil Wing)",
            "faculty": "Dr. Ashok Rawat",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "ce.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ce-survey-lab"
        },
        {
            "id": "tt-eee-mon-1",
            "branch": "EEE",
            "sem": 3,
            "day": "Monday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Electrical Machines-I",
            "subjectCode": "PCC-EEE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-mon-2",
            "branch": "EEE",
            "sem": 3,
            "day": "Monday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Network Analysis & Synthesis",
            "subjectCode": "PCC-EEE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-mon-break",
            "branch": "EEE",
            "sem": 3,
            "day": "Monday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-mon-3",
            "branch": "EEE",
            "sem": 3,
            "day": "Monday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Electromagnetic Field Theory",
            "subjectCode": "PCC-EEE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Deepak Goyal",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-mon-4",
            "branch": "EEE",
            "sem": 3,
            "day": "Monday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Analog Electronics",
            "subjectCode": "ESC-ECE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-eee-mon-lunch",
            "branch": "EEE",
            "sem": 3,
            "day": "Monday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-mon-5",
            "branch": "EEE",
            "sem": 3,
            "day": "Monday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Electrical Machines Lab (B1) / Circuits Simulation Lab (B2)",
            "subjectCode": "LC-EEE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Electrical Machines Lab 1",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-mon-7",
            "branch": "EEE",
            "sem": 3,
            "day": "Monday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Electrical Machines-I Tutorial & Gate Prep",
            "subjectCode": "TUT-EEE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-tue-1",
            "branch": "EEE",
            "sem": 3,
            "day": "Tuesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Network Analysis & Synthesis",
            "subjectCode": "PCC-EEE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-tue-2",
            "branch": "EEE",
            "sem": 3,
            "day": "Tuesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Electromagnetic Field Theory",
            "subjectCode": "PCC-EEE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Deepak Goyal",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-tue-break",
            "branch": "EEE",
            "sem": 3,
            "day": "Tuesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-tue-3",
            "branch": "EEE",
            "sem": 3,
            "day": "Tuesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Analog Electronics",
            "subjectCode": "ESC-ECE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-eee-tue-4",
            "branch": "EEE",
            "sem": 3,
            "day": "Tuesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Electrical Machines-I",
            "subjectCode": "PCC-EEE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-tue-lunch",
            "branch": "EEE",
            "sem": 3,
            "day": "Tuesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-tue-5",
            "branch": "EEE",
            "sem": 3,
            "day": "Tuesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Electrical Machines Lab (B1) / Circuits Simulation Lab (B2)",
            "subjectCode": "LC-EEE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Electrical Machines Lab 1",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-tue-7",
            "branch": "EEE",
            "sem": 3,
            "day": "Tuesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Electrical Machines-I Tutorial & Gate Prep",
            "subjectCode": "TUT-EEE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-wed-1",
            "branch": "EEE",
            "sem": 3,
            "day": "Wednesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Electromagnetic Field Theory",
            "subjectCode": "PCC-EEE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Deepak Goyal",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-wed-2",
            "branch": "EEE",
            "sem": 3,
            "day": "Wednesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Analog Electronics",
            "subjectCode": "ESC-ECE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-eee-wed-break",
            "branch": "EEE",
            "sem": 3,
            "day": "Wednesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-wed-3",
            "branch": "EEE",
            "sem": 3,
            "day": "Wednesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Electrical Machines-I",
            "subjectCode": "PCC-EEE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-wed-4",
            "branch": "EEE",
            "sem": 3,
            "day": "Wednesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Network Analysis & Synthesis",
            "subjectCode": "PCC-EEE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-wed-lunch",
            "branch": "EEE",
            "sem": 3,
            "day": "Wednesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-wed-5",
            "branch": "EEE",
            "sem": 3,
            "day": "Wednesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Electrical Machines Lab (B1) / Circuits Simulation Lab (B2)",
            "subjectCode": "LC-EEE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Electrical Machines Lab 1",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-wed-7",
            "branch": "EEE",
            "sem": 3,
            "day": "Wednesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Electrical Machines-I Tutorial & Gate Prep",
            "subjectCode": "TUT-EEE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-thu-1",
            "branch": "EEE",
            "sem": 3,
            "day": "Thursday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Analog Electronics",
            "subjectCode": "ESC-ECE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-eee-thu-2",
            "branch": "EEE",
            "sem": 3,
            "day": "Thursday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Electrical Machines-I",
            "subjectCode": "PCC-EEE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-thu-break",
            "branch": "EEE",
            "sem": 3,
            "day": "Thursday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-thu-3",
            "branch": "EEE",
            "sem": 3,
            "day": "Thursday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Network Analysis & Synthesis",
            "subjectCode": "PCC-EEE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-thu-4",
            "branch": "EEE",
            "sem": 3,
            "day": "Thursday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Electromagnetic Field Theory",
            "subjectCode": "PCC-EEE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Deepak Goyal",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-thu-lunch",
            "branch": "EEE",
            "sem": 3,
            "day": "Thursday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-thu-5",
            "branch": "EEE",
            "sem": 3,
            "day": "Thursday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Electrical Machines Lab (B1) / Circuits Simulation Lab (B2)",
            "subjectCode": "LC-EEE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Electrical Machines Lab 1",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-thu-7",
            "branch": "EEE",
            "sem": 3,
            "day": "Thursday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Electrical Machines-I Tutorial & Gate Prep",
            "subjectCode": "TUT-EEE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-fri-1",
            "branch": "EEE",
            "sem": 3,
            "day": "Friday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Electrical Machines-I",
            "subjectCode": "PCC-EEE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-fri-2",
            "branch": "EEE",
            "sem": 3,
            "day": "Friday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Network Analysis & Synthesis",
            "subjectCode": "PCC-EEE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-fri-break",
            "branch": "EEE",
            "sem": 3,
            "day": "Friday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-fri-3",
            "branch": "EEE",
            "sem": 3,
            "day": "Friday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Electromagnetic Field Theory",
            "subjectCode": "PCC-EEE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Deepak Goyal",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-fri-4",
            "branch": "EEE",
            "sem": 3,
            "day": "Friday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Analog Electronics",
            "subjectCode": "ESC-ECE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-eee-fri-lunch",
            "branch": "EEE",
            "sem": 3,
            "day": "Friday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-fri-5",
            "branch": "EEE",
            "sem": 3,
            "day": "Friday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Electrical Machines Lab (B1) / Circuits Simulation Lab (B2)",
            "subjectCode": "LC-EEE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Electrical Machines Lab 1",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-fri-7",
            "branch": "EEE",
            "sem": 3,
            "day": "Friday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Electrical Machines-I Tutorial & Gate Prep",
            "subjectCode": "TUT-EEE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-sat-1",
            "branch": "EEE",
            "sem": 3,
            "day": "Saturday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Network Analysis & Synthesis",
            "subjectCode": "PCC-EEE-203",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-sat-2",
            "branch": "EEE",
            "sem": 3,
            "day": "Saturday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Electromagnetic Field Theory",
            "subjectCode": "PCC-EEE-205",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Deepak Goyal",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-power-theory"
        },
        {
            "id": "tt-eee-sat-break",
            "branch": "EEE",
            "sem": 3,
            "day": "Saturday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-sat-3",
            "branch": "EEE",
            "sem": 3,
            "day": "Saturday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Analog Electronics",
            "subjectCode": "ESC-ECE-207",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. Neeraj Gupta",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-ece-ade-lab"
        },
        {
            "id": "tt-eee-sat-4",
            "branch": "EEE",
            "sem": 3,
            "day": "Saturday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Electrical Machines-I",
            "subjectCode": "PCC-EEE-201",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-sat-lunch",
            "branch": "EEE",
            "sem": 3,
            "day": "Saturday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-eee-sat-5",
            "branch": "EEE",
            "sem": 3,
            "day": "Saturday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Electrical Machines Lab (B1) / Circuits Simulation Lab (B2)",
            "subjectCode": "LC-EEE-209",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Electrical Machines Lab 1",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-eee-sat-7",
            "branch": "EEE",
            "sem": 3,
            "day": "Saturday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Electrical Machines-I Tutorial & Gate Prep",
            "subjectCode": "TUT-EEE-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 108 (EEE Block)",
            "faculty": "Dr. P. C. Sharma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "eee.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-eee-machines-lab"
        },
        {
            "id": "tt-1st-mon-1",
            "branch": "1ST",
            "sem": 1,
            "day": "Monday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Engineering Mathematics-I",
            "subjectCode": "BSC-MATH-101",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-mon-2",
            "branch": "1ST",
            "sem": 1,
            "day": "Monday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Applied Physics",
            "subjectCode": "BSC-PHY-103",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-mon-break",
            "branch": "1ST",
            "sem": 1,
            "day": "Monday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-mon-3",
            "branch": "1ST",
            "sem": 1,
            "day": "Monday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Basic Electrical Engineering",
            "subjectCode": "ESC-EE-102",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-bee-theory"
        },
        {
            "id": "tt-1st-mon-4",
            "branch": "1ST",
            "sem": 1,
            "day": "Monday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Engineering Graphics & Design",
            "subjectCode": "ESC-ME-104",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-1st-mon-lunch",
            "branch": "1ST",
            "sem": 1,
            "day": "Monday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-mon-5",
            "branch": "1ST",
            "sem": 1,
            "day": "Monday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Physics & Optics Lab (B1) / BEE Laboratory (B2)",
            "subjectCode": "LC-PHY-105",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Physics Lab / BEE Lab 1",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-mon-7",
            "branch": "1ST",
            "sem": 1,
            "day": "Monday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Engineering Mathematics-I Tutorial & Gate Prep",
            "subjectCode": "TUT-1ST-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-tue-1",
            "branch": "1ST",
            "sem": 1,
            "day": "Tuesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Applied Physics",
            "subjectCode": "BSC-PHY-103",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-tue-2",
            "branch": "1ST",
            "sem": 1,
            "day": "Tuesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Basic Electrical Engineering",
            "subjectCode": "ESC-EE-102",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-bee-theory"
        },
        {
            "id": "tt-1st-tue-break",
            "branch": "1ST",
            "sem": 1,
            "day": "Tuesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-tue-3",
            "branch": "1ST",
            "sem": 1,
            "day": "Tuesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Engineering Graphics & Design",
            "subjectCode": "ESC-ME-104",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-1st-tue-4",
            "branch": "1ST",
            "sem": 1,
            "day": "Tuesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Engineering Mathematics-I",
            "subjectCode": "BSC-MATH-101",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-tue-lunch",
            "branch": "1ST",
            "sem": 1,
            "day": "Tuesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-tue-5",
            "branch": "1ST",
            "sem": 1,
            "day": "Tuesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Physics & Optics Lab (B1) / BEE Laboratory (B2)",
            "subjectCode": "LC-PHY-105",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Physics Lab / BEE Lab 1",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-tue-7",
            "branch": "1ST",
            "sem": 1,
            "day": "Tuesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Engineering Mathematics-I Tutorial & Gate Prep",
            "subjectCode": "TUT-1ST-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-wed-1",
            "branch": "1ST",
            "sem": 1,
            "day": "Wednesday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Basic Electrical Engineering",
            "subjectCode": "ESC-EE-102",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-bee-theory"
        },
        {
            "id": "tt-1st-wed-2",
            "branch": "1ST",
            "sem": 1,
            "day": "Wednesday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Engineering Graphics & Design",
            "subjectCode": "ESC-ME-104",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-1st-wed-break",
            "branch": "1ST",
            "sem": 1,
            "day": "Wednesday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-wed-3",
            "branch": "1ST",
            "sem": 1,
            "day": "Wednesday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Engineering Mathematics-I",
            "subjectCode": "BSC-MATH-101",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-wed-4",
            "branch": "1ST",
            "sem": 1,
            "day": "Wednesday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Applied Physics",
            "subjectCode": "BSC-PHY-103",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-wed-lunch",
            "branch": "1ST",
            "sem": 1,
            "day": "Wednesday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-wed-5",
            "branch": "1ST",
            "sem": 1,
            "day": "Wednesday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Physics & Optics Lab (B1) / BEE Laboratory (B2)",
            "subjectCode": "LC-PHY-105",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Physics Lab / BEE Lab 1",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-wed-7",
            "branch": "1ST",
            "sem": 1,
            "day": "Wednesday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Engineering Mathematics-I Tutorial & Gate Prep",
            "subjectCode": "TUT-1ST-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-thu-1",
            "branch": "1ST",
            "sem": 1,
            "day": "Thursday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Engineering Graphics & Design",
            "subjectCode": "ESC-ME-104",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-1st-thu-2",
            "branch": "1ST",
            "sem": 1,
            "day": "Thursday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Engineering Mathematics-I",
            "subjectCode": "BSC-MATH-101",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-thu-break",
            "branch": "1ST",
            "sem": 1,
            "day": "Thursday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-thu-3",
            "branch": "1ST",
            "sem": 1,
            "day": "Thursday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Applied Physics",
            "subjectCode": "BSC-PHY-103",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-thu-4",
            "branch": "1ST",
            "sem": 1,
            "day": "Thursday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Basic Electrical Engineering",
            "subjectCode": "ESC-EE-102",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-bee-theory"
        },
        {
            "id": "tt-1st-thu-lunch",
            "branch": "1ST",
            "sem": 1,
            "day": "Thursday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-thu-5",
            "branch": "1ST",
            "sem": 1,
            "day": "Thursday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Physics & Optics Lab (B1) / BEE Laboratory (B2)",
            "subjectCode": "LC-PHY-105",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Physics Lab / BEE Lab 1",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-thu-7",
            "branch": "1ST",
            "sem": 1,
            "day": "Thursday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Engineering Mathematics-I Tutorial & Gate Prep",
            "subjectCode": "TUT-1ST-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-fri-1",
            "branch": "1ST",
            "sem": 1,
            "day": "Friday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Engineering Mathematics-I",
            "subjectCode": "BSC-MATH-101",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-fri-2",
            "branch": "1ST",
            "sem": 1,
            "day": "Friday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Applied Physics",
            "subjectCode": "BSC-PHY-103",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-fri-break",
            "branch": "1ST",
            "sem": 1,
            "day": "Friday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-fri-3",
            "branch": "1ST",
            "sem": 1,
            "day": "Friday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Basic Electrical Engineering",
            "subjectCode": "ESC-EE-102",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-bee-theory"
        },
        {
            "id": "tt-1st-fri-4",
            "branch": "1ST",
            "sem": 1,
            "day": "Friday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Engineering Graphics & Design",
            "subjectCode": "ESC-ME-104",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-1st-fri-lunch",
            "branch": "1ST",
            "sem": 1,
            "day": "Friday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-fri-5",
            "branch": "1ST",
            "sem": 1,
            "day": "Friday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Physics & Optics Lab (B1) / BEE Laboratory (B2)",
            "subjectCode": "LC-PHY-105",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Physics Lab / BEE Lab 1",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-fri-7",
            "branch": "1ST",
            "sem": 1,
            "day": "Friday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Engineering Mathematics-I Tutorial & Gate Prep",
            "subjectCode": "TUT-1ST-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-sat-1",
            "branch": "1ST",
            "sem": 1,
            "day": "Saturday",
            "period": 1,
            "timeSlot": "09:00 - 09:55 AM",
            "startTime": "09:00",
            "endTime": "09:55",
            "subject": "Applied Physics",
            "subjectCode": "BSC-PHY-103",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-sat-2",
            "branch": "1ST",
            "sem": 1,
            "day": "Saturday",
            "period": 2,
            "timeSlot": "09:55 - 10:50 AM",
            "startTime": "09:55",
            "endTime": "10:50",
            "subject": "Basic Electrical Engineering",
            "subjectCode": "ESC-EE-102",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Prof. Alka Verma",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-bee-theory"
        },
        {
            "id": "tt-1st-sat-break",
            "branch": "1ST",
            "sem": 1,
            "day": "Saturday",
            "period": "break",
            "timeSlot": "10:50 - 11:05 AM",
            "startTime": "10:50",
            "endTime": "11:05",
            "subject": "Morning Tea & Nescafe Break",
            "subjectCode": "RECESS-1",
            "type": "break",
            "typeLabel": "\u2615 Tea & Snack Break",
            "room": "Nescafe Kiosk / Central Lawn",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-sat-3",
            "branch": "1ST",
            "sem": 1,
            "day": "Saturday",
            "period": 3,
            "timeSlot": "11:05 - 12:00 PM",
            "startTime": "11:05",
            "endTime": "12:00",
            "subject": "Engineering Graphics & Design",
            "subjectCode": "ESC-ME-104",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Er. Devendra Singh",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-me-workshop-lab"
        },
        {
            "id": "tt-1st-sat-4",
            "branch": "1ST",
            "sem": 1,
            "day": "Saturday",
            "period": 4,
            "timeSlot": "12:00 - 12:55 PM",
            "startTime": "12:00",
            "endTime": "12:55",
            "subject": "Engineering Mathematics-I",
            "subjectCode": "BSC-MATH-101",
            "type": "lecture",
            "typeLabel": "\ud83d\udcd6 Theory Lecture",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        },
        {
            "id": "tt-1st-sat-lunch",
            "branch": "1ST",
            "sem": 1,
            "day": "Saturday",
            "period": "lunch",
            "timeSlot": "12:55 - 01:40 PM",
            "startTime": "12:55",
            "endTime": "13:40",
            "subject": "Main Canteen Lunch Recess",
            "subjectCode": "LUNCH-RECESS",
            "type": "break",
            "typeLabel": "\ud83c\udf5b Canteen Lunch Break",
            "room": "Main Canteen & Food Court",
            "faculty": "Campus Amenities",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": ""
        },
        {
            "id": "tt-1st-sat-5",
            "branch": "1ST",
            "sem": 1,
            "day": "Saturday",
            "period": 5,
            "timeSlot": "01:40 - 03:30 PM",
            "startTime": "13:40",
            "endTime": "15:30",
            "subject": "Physics & Optics Lab (B1) / BEE Laboratory (B2)",
            "subjectCode": "LC-PHY-105",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Practical (2 Hrs)",
            "room": "Physics Lab / BEE Lab 1",
            "faculty": "Dr. Arvind Pathak",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "B1 & B2 Split",
            "credits": "3-4 Credits",
            "notesId": "note-1st-physics-lab"
        },
        {
            "id": "tt-1st-sat-7",
            "branch": "1ST",
            "sem": 1,
            "day": "Saturday",
            "period": 7,
            "timeSlot": "03:30 - 04:15 PM",
            "startTime": "15:30",
            "endTime": "16:15",
            "subject": "Engineering Mathematics-I Tutorial & Gate Prep",
            "subjectCode": "TUT-1ST-01",
            "type": "tutorial",
            "typeLabel": "\u270f\ufe0f Tutorial & Doubts",
            "room": "Room 110 (Aryabhata Ground Floor)",
            "faculty": "Dr. Seema Rani",
            "facultyCabin": "Aryabhata Faculty Floor",
            "facultyEmail": "1st.dept@dronacharya.info",
            "batch": "All",
            "credits": "3-4 Credits",
            "notesId": "note-1st-maths-cheat"
        }
    ],
    notes: [
        {
            "id": "note-cse-ds-lab",
            "title": "Data Structures & Algorithms Lab Manual (C++ Implementation & Viva)",
            "branch": "CSE",
            "year": 2,
            "semester": "Sem 3",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Manual & Viva",
            "subjectCode": "PCC-CSE-203",
            "author": "CSE Dept Faculty & ACM Chapter",
            "verified": true,
            "pages": 58,
            "fileSize": "4.2 MB",
            "downloads": 1248,
            "rating": 4.9,
            "description": "Official laboratory record for CSE Semester 3 covering 14 practical experiments in C++. Each experiment includes problem statement, algorithm, time & space complexity, fully tested source code, sample console I/O, and 25 viva questions with answers.",
            "syllabusTopics": [
                "14 Practical Experiments",
                "C++ STL & Pointers",
                "25 Viva Voce Q&A",
                "Complexity Analysis"
            ],
            "experiments": [
                "Exp 1: Singly and Doubly Linked List Operations (Insert, Delete, Reverse, Display)",
                "Exp 2: Stack Application - Infix to Postfix Conversion & Arithmetic Evaluation",
                "Exp 3: Circular Queue & Double-Ended Queue (Deque) Array Implementation",
                "Exp 4: Binary Search Tree (BST) Construction & Recursive/Iterative Traversals",
                "Exp 5: Dijkstra's Shortest Path Algorithm using Adjacency List & Priority Queue",
                "Exp 6: Minimum Spanning Tree (MST) using Prim's and Kruskal's Algorithms",
                "Exp 7: Sorting Comparison: Randomized QuickSort, MergeSort, and HeapSort"
            ],
            "vivaQuestions": [
                {
                    "q": "Why is QuickSort preferred over MergeSort for arrays?",
                    "a": "QuickSort is in-place (O(1) auxiliary space beyond recursion stack) and exhibits better cache locality, whereas MergeSort requires O(N) extra auxiliary memory."
                },
                {
                    "q": "What is the advantage of a Circular Queue over a Linear Queue?",
                    "a": "In a linear queue, once elements are dequeued, empty slots at the front cannot be reused without shifting. A circular queue reuses freed spaces using modulo arithmetic ((rear+1)%size)."
                },
                {
                    "q": "How do you detect and remove a loop in a Linked List?",
                    "a": "Using Floyd's Cycle Detection (Tortoise and Hare algorithm). Once fast and slow pointers meet, reset one pointer to head and move both one step at a time to find the start of the cycle."
                },
                {
                    "q": "What is the worst-case time complexity of Binary Search Tree search?",
                    "a": "O(N) for a skewed or degenerate BST. Balanced variants like AVL or Red-Black trees maintain O(log N) height."
                }
            ]
        },
        {
            "id": "note-cse-os-lab",
            "title": "Operating Systems Lab Manual (Linux Shell & POSIX C)",
            "branch": "CSE",
            "year": 3,
            "semester": "Sem 5",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Manual & Viva",
            "subjectCode": "PCC-CSE-301",
            "author": "Prof. Rajesh K. & Linux System Admins",
            "verified": true,
            "pages": 64,
            "fileSize": "5.1 MB",
            "downloads": 976,
            "rating": 4.8,
            "description": "Comprehensive Unix/Linux practical manual. Covers Linux bash scripting, process creation (fork, exec, wait), CPU scheduling simulations, inter-process communication (pipes, shared memory), semaphore synchronization, and memory paging.",
            "syllabusTopics": [
                "Process Fork & Exec",
                "CPU Scheduling Simulations",
                "Banker Deadlock Safety",
                "Paging & FIFO/LRU"
            ],
            "experiments": [
                "Exp 1: Advanced Bash Scripting for File Parsing, User Management & System Monitoring",
                "Exp 2: Process Control in C using fork(), vfork(), execvp(), and waitpid()",
                "Exp 3: Simulation of Preemptive Priority & Round Robin CPU Scheduling",
                "Exp 4: Producer-Consumer Problem using POSIX Mutexes & Semaphores (sem_wait, sem_post)",
                "Exp 5: Banker's Algorithm for Deadlock Avoidance and Resource Allocation Verification",
                "Exp 6: Page Replacement Algorithms: FIFO, LRU, and Optimal Paging Comparison"
            ],
            "vivaQuestions": [
                {
                    "q": "What is the return value of fork() in parent and child processes?",
                    "a": "fork() returns 0 to the child process, the child's PID (positive integer) to the parent, and -1 if creation fails."
                },
                {
                    "q": "What is the difference between a mutex and a binary semaphore?",
                    "a": "A mutex has ownership (only the thread that locked it can unlock it). A binary semaphore can be signaled/unlocked by any thread, acting as a signaling mechanism."
                },
                {
                    "q": "What causes Thrashing in virtual memory?",
                    "a": "Thrashing occurs when the system spends more time swapping pages into and out of memory than executing processes, usually due to insufficient allocated physical frames."
                }
            ]
        },
        {
            "id": "note-cse-dbms-theory",
            "title": "Database Management Systems (DBMS) Handwritten Topper Notes",
            "branch": "CSE",
            "year": 2,
            "semester": "Sem 4",
            "type": "theory",
            "typeLabel": "\ud83d\udcd6 Handwritten Notes",
            "subjectCode": "PCC-CSE-204",
            "author": "Ananya Verma (DCE CSE Batch 2024 Topper, 9.6 CGPA)",
            "verified": true,
            "pages": 112,
            "fileSize": "12.4 MB",
            "downloads": 1530,
            "rating": 5.0,
            "description": "Crystal clear handwritten notes with ER diagrams, SQL query templates, relational algebra notation, 1NF to BCNF step-by-step decomposition examples, transaction ACID schedules, and B+ tree indexing.",
            "syllabusTopics": [
                "ER to Relational Schema",
                "Relational Algebra & SQL",
                "BCNF / 3NF Normalization",
                "ACID & 2PL Concurrency"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-cse-daa-pyq",
            "title": "Design & Analysis of Algorithms (DAA) Solved Question Papers (2020-2025)",
            "branch": "CSE",
            "year": 3,
            "semester": "Sem 5",
            "type": "pyq",
            "typeLabel": "\ud83d\udcc4 Solved PYQ Papers",
            "subjectCode": "PCC-CSE-303",
            "author": "DCE Academic Excellence Council",
            "verified": true,
            "pages": 86,
            "fileSize": "8.7 MB",
            "downloads": 1120,
            "rating": 4.9,
            "description": "Last 5 years of university semester examination question papers solved with detailed step-by-step algorithms, recurrence tree diagrams, Master Theorem cases, and Dynamic Programming tabular breakdowns.",
            "syllabusTopics": [
                "Master Theorem Solved",
                "0/1 Knapsack & DP Tables",
                "Bellman-Ford & Floyd-Warshall",
                "NP-Complete Reductions"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-it-web-lab",
            "title": "Full-Stack Web Development Lab Manual (MERN Stack & REST API)",
            "branch": "IT",
            "year": 3,
            "semester": "Sem 6",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Manual & Viva",
            "subjectCode": "PCC-IT-306",
            "author": "IT Department Web Tech Lab",
            "verified": true,
            "pages": 52,
            "fileSize": "4.6 MB",
            "downloads": 890,
            "rating": 4.8,
            "description": "Practical guide to building reactive web applications using Node.js, Express, MongoDB Atlas, and React.js. Includes clean REST API endpoints, JWT token authentication, and deployment instructions.",
            "syllabusTopics": [
                "React Hooks & Props",
                "Express.js REST Routing",
                "MongoDB Mongoose Schema",
                "JWT Security & Cookies"
            ],
            "experiments": [
                "Exp 1: Responsive UI with CSS Grid, Flexbox, and Modern Media Queries",
                "Exp 2: Client-side routing & State management using React Context API",
                "Exp 3: Building CRUD RESTful microservices with Node.js and Express",
                "Exp 4: MongoDB database integration with Mongoose ODM schemas & validation",
                "Exp 5: Secure user authentication using bcrypt password hashing and JWT",
                "Exp 6: File upload pipeline using Multer and cloud image storage"
            ],
            "vivaQuestions": [
                {
                    "q": "What is the Virtual DOM and how does React reconciliation work?",
                    "a": "Virtual DOM is an in-memory representation of real DOM elements. When state changes, React creates a new tree and diffs it with the previous snapshot, updating only modified nodes in the real DOM."
                },
                {
                    "q": "What is the difference between SQL and NoSQL database indexing?",
                    "a": "SQL uses B-trees for structured relational rows with ACID constraints, whereas NoSQL (like MongoDB) supports flexible dynamic schemas with B-tree indices on JSON/BSON fields and sharding."
                },
                {
                    "q": "What is CORS and why is it needed?",
                    "a": "Cross-Origin Resource Sharing is a browser security mechanism that restricts HTTP requests initiated from scripts outside the origin domain unless specific Access-Control-Allow-Origin headers are returned."
                }
            ]
        },
        {
            "id": "note-it-ml-theory",
            "title": "Machine Learning & Neural Networks Complete Lecture Notes",
            "branch": "IT",
            "year": 4,
            "semester": "Sem 7",
            "type": "theory",
            "typeLabel": "\ud83d\udcd6 Handwritten Notes",
            "subjectCode": "PEC-IT-401",
            "author": "Dr. S. Nair (Head of AI & Data Science)",
            "verified": true,
            "pages": 94,
            "fileSize": "9.8 MB",
            "downloads": 760,
            "rating": 4.9,
            "description": "Complete theoretical notes and mathematical derivations for Supervised, Unsupervised, and Reinforcement Learning. Includes backpropagation math, cost functions, SVM kernels, and CNN layers.",
            "syllabusTopics": [
                "Gradient Descent Derivations",
                "Support Vector Machines (SVM)",
                "Backpropagation Algorithm",
                "CNN & Transformer Basics"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-csit-oops-theory",
            "title": "Object Oriented Programming with Java (OOPs) Comprehensive Guide",
            "branch": "CSIT",
            "year": 2,
            "semester": "Sem 3",
            "type": "theory",
            "typeLabel": "\ud83d\udcd6 Handwritten Notes",
            "subjectCode": "PCC-CSIT-201",
            "author": "CSIT Faculty & Peer Mentors",
            "verified": true,
            "pages": 88,
            "fileSize": "7.9 MB",
            "downloads": 1050,
            "rating": 4.8,
            "description": "Comprehensive handbook covering Core Java, Polymorphism, Abstract classes, Interface contracts, Exception hierarchy, Multithreading synchronization, and Java Collections Framework.",
            "syllabusTopics": [
                "Inheritance & Polymorphism",
                "Java Collections Framework",
                "Thread Lifecycle & Locks",
                "Custom Exception Handling"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-csit-cn-cheat",
            "title": "Computer Networks Protocols & Subnetting Rapid Cheat Sheet",
            "branch": "CSIT",
            "year": 3,
            "semester": "Sem 5",
            "type": "cheat",
            "typeLabel": "\ud83d\udcdd Formula Cheat Sheet",
            "subjectCode": "PCC-CSIT-303",
            "author": "DCE Coding Club",
            "verified": true,
            "pages": 12,
            "fileSize": "1.9 MB",
            "downloads": 1410,
            "rating": 4.9,
            "description": "Quick revision handbook for End-Semesters and GATE. Contains CIDR subnetting tables, header structures for IPv4, IPv6, TCP, UDP, congestion control windows, and packet propagation formulas.",
            "syllabusTopics": [
                "CIDR Subnet Calculations",
                "TCP 3-Way Handshake & Flags",
                "Routing: OSPF vs BGP",
                "Sliding Window Math"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-ece-ade-lab",
            "title": "Analog & Digital Electronics Lab Manual (Breadboard & Multisim)",
            "branch": "ECE",
            "year": 2,
            "semester": "Sem 3",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Manual & Viva",
            "subjectCode": "PCC-ECE-201",
            "author": "ECE Hardware Systems Lab",
            "verified": true,
            "pages": 60,
            "fileSize": "5.4 MB",
            "downloads": 820,
            "rating": 4.9,
            "description": "Practical experiment handbook with circuit schematics, pinout diagrams (IC 741, 555 timer, 7400 NAND, 7490 Decade counter), observation tables, component calculations, and 30 viva questions.",
            "syllabusTopics": [
                "Op-Amp 741 Inverting/Non-inverting",
                "555 Timer Astable Multivibrator",
                "BJT CE Amplifier Frequency Response",
                "Combinational Logic & Counters"
            ],
            "experiments": [
                "Exp 1: BJT Common Emitter Amplifier - Frequency Response & Bandwidth Determination",
                "Exp 2: Operational Amplifier (IC 741) as Inverting, Non-inverting Amplifier & Adder",
                "Exp 3: Astable and Monostable Multivibrator Design using 555 Timer IC",
                "Exp 4: Design & Realization of 4-bit Binary Full Adder using Logic ICs",
                "Exp 5: Design and Verification of Synchronous Up/Down Modulo-10 Counter"
            ],
            "vivaQuestions": [
                {
                    "q": "What is the Slew Rate of an Operational Amplifier?",
                    "a": "Slew Rate is the maximum rate of change of output voltage per unit of time (expressed in V/\u00b5s). For IC 741, typical slew rate is 0.5 V/\u00b5s."
                },
                {
                    "q": "Why is negative feedback employed in amplifier circuits?",
                    "a": "Negative feedback stabilizes voltage gain, increases bandwidth, lowers distortion, and improves input/output impedance characteristics at the expense of reduced gain."
                },
                {
                    "q": "What is the role of pin 5 (Control Voltage) in a 555 timer?",
                    "a": "Pin 5 controls the threshold and trigger levels. When not in use, it is connected to ground through a 0.01 \u00b5F bypass capacitor to prevent high-frequency noise from affecting timing."
                }
            ]
        },
        {
            "id": "note-ece-signals-theory",
            "title": "Signals and Systems Solved Numericals & Classroom Notes",
            "branch": "ECE",
            "year": 3,
            "semester": "Sem 5",
            "type": "theory",
            "typeLabel": "\ud83d\udcd6 Handwritten Notes",
            "subjectCode": "PCC-ECE-301",
            "author": "DCE ECE Department Scholars",
            "verified": true,
            "pages": 104,
            "fileSize": "10.2 MB",
            "downloads": 730,
            "rating": 4.8,
            "description": "Step-by-step solved problems on Continuous & Discrete Time Fourier Series, Fourier Transform duality, Laplace Transform with Region of Convergence (ROC), Z-Transforms, and LTI impulse response.",
            "syllabusTopics": [
                "Fourier Transform Properties",
                "Laplace Transform & ROC",
                "Z-Transform Inverse Methods",
                "Convolution Integral & Sum"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-me-workshop-lab",
            "title": "Manufacturing Processes & Central Workshop Practice Lab Manual",
            "branch": "ME",
            "year": 2,
            "semester": "Sem 3",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Manual & Viva",
            "subjectCode": "PCC-ME-205",
            "author": "Central Workshop Superintendents",
            "verified": true,
            "pages": 48,
            "fileSize": "6.2 MB",
            "downloads": 670,
            "rating": 4.7,
            "description": "Safety protocols, machine diagrams, tool geometry, and fabrication job sheets for Lathe Turning, Shaper Machine, Shielded Metal Arc Welding (SMAW), Oxy-Acetylene Gas Cutting, and Sand Foundry Casting.",
            "syllabusTopics": [
                "Lathe Facing & Step Turning",
                "Arc & Gas Welding Joints",
                "Foundry Sand Molding",
                "Sheet Metal Pattern Layout"
            ],
            "experiments": [
                "Exp 1: Lathe Machine: Step Turning, Knurling, and Thread Cutting on Mild Steel Job",
                "Exp 2: Welding Shop: Fabrication of Lap & Butt Joint using Shielded Metal Arc Welding",
                "Exp 3: Foundry Shop: Preparation of Green Sand Mold with Split Wooden Pattern",
                "Exp 4: Sheet Metal Shop: Development and Fabrication of a Rectangular Tray / Funnel",
                "Exp 5: Fitting Shop: Hack-sawing, Filing, and Drilling to produce mating V-Fit joints"
            ],
            "vivaQuestions": [
                {
                    "q": "What is the function of flux in electric arc welding?",
                    "a": "Flux generates a protective gas shield and slag over the molten weld pool, preventing atmospheric contamination (oxidation and nitriding) and stabilizing the arc."
                },
                {
                    "q": "Name the major cutting tool angles on a single-point lathe tool.",
                    "a": "Back rake angle, side rake angle, end relief angle, side relief angle, end cutting edge angle, side cutting edge angle, and nose radius (ASA signature)."
                }
            ]
        },
        {
            "id": "note-me-thermo-pyq",
            "title": "Thermodynamics & Heat Transfer 5-Year Solved University Papers",
            "branch": "ME",
            "year": 3,
            "semester": "Sem 5",
            "type": "pyq",
            "typeLabel": "\ud83d\udcc4 Solved PYQ Papers",
            "subjectCode": "PCC-ME-301",
            "author": "Mechanical Engineering Society (MES)",
            "verified": true,
            "pages": 78,
            "fileSize": "8.1 MB",
            "downloads": 590,
            "rating": 4.8,
            "description": "Fully worked solutions to last 5 years university examination papers. Includes P-V, T-s, and Mollier steam diagrams, Carnot, Otto, Diesel, and Rankine cycle calculations, and LMTD heat exchanger derivations.",
            "syllabusTopics": [
                "First & Second Law Numerical",
                "Rankine Cycle Steam Tables",
                "Fourier 1D Conduction",
                "Heat Exchanger LMTD & NTU"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-ce-survey-lab",
            "title": "Surveying & Geomatics Field Lab Manual (Total Station & Theodolite)",
            "branch": "CE",
            "year": 2,
            "semester": "Sem 4",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Manual & Viva",
            "subjectCode": "PCC-CE-204",
            "author": "Civil Engineering Field Research Wing",
            "verified": true,
            "pages": 56,
            "fileSize": "5.8 MB",
            "downloads": 610,
            "rating": 4.9,
            "description": "Complete outdoor surveying guide. Includes field book recording formats, rise & fall method, height of instrument method, traverse plotting, contour interval calculation, and electronic Total Station setup.",
            "syllabusTopics": [
                "Fly Leveling Field Tables",
                "Transit Theodolite Traversal",
                "Total Station Coordinate Survey",
                "Contour Map Interpolation"
            ],
            "experiments": [
                "Exp 1: Differential and Fly Leveling across DCE campus using Dumpy Level",
                "Exp 2: Measurement of Horizontal & Vertical Angles using Transit Theodolite",
                "Exp 3: Closed Traverse Survey and Computation of Latitude and Departure (Bowditch Rule)",
                "Exp 4: Electronic Total Station (ETS): Setup, Calibration, and Topographic Grid Survey",
                "Exp 5: Curve Ranging by Rankine's Method of Tangential Angles"
            ],
            "vivaQuestions": [
                {
                    "q": "What is the difference between Height of Instrument (HI) and Rise & Fall method?",
                    "a": "HI method is faster with fewer arithmetic checks (only Backsight and Foresight sum checks). Rise & Fall provides a complete cross-check on all intermediate sight calculations as well."
                },
                {
                    "q": "What is the Bowditch rule for balancing a closed traverse?",
                    "a": "The correction to latitude or departure of any traverse line is proportional to the length of that line divided by the total perimeter of the traverse."
                }
            ]
        },
        {
            "id": "note-ce-rcc-theory",
            "title": "Design of Reinforced Concrete Structures (IS 456:2000) Notes",
            "branch": "CE",
            "year": 3,
            "semester": "Sem 6",
            "type": "theory",
            "typeLabel": "\ud83d\udcd6 Handwritten Notes",
            "subjectCode": "PCC-CE-302",
            "author": "Er. Vikrant Sharma (Structural Engineering Topper)",
            "verified": true,
            "pages": 96,
            "fileSize": "11.5 MB",
            "downloads": 780,
            "rating": 4.9,
            "description": "Limit state design method strictly based on Indian Standard code IS 456:2000. Singly & doubly reinforced rectangular and flanged beams, one-way & two-way slabs, short columns with uniaxial bending, and isolated footings.",
            "syllabusTopics": [
                "Limit State of Collapse",
                "Singly & Doubly Beams",
                "Two-Way Slab Moment Coefficients",
                "Column Interaction Diagrams"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-eee-machines-lab",
            "title": "Electrical Machines-I Laboratory Manual (DC Machines & Transformers)",
            "branch": "EEE",
            "year": 2,
            "semester": "Sem 3",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Manual & Viva",
            "subjectCode": "PCC-EEE-203",
            "author": "EEE Department Electrical Machines Lab",
            "verified": true,
            "pages": 54,
            "fileSize": "4.9 MB",
            "downloads": 710,
            "rating": 4.8,
            "description": "Hands-on practical manual with wiring schematic diagrams, 3-point and 4-point starter connections, Hopkinson back-to-back testing, transformer equivalent circuit parameters, and 30 viva questions.",
            "syllabusTopics": [
                "DC Shunt Motor Load Test",
                "3-Point Starter Internals",
                "Transformer OC & SC Tests",
                "Swinburne's Efficiency Test"
            ],
            "experiments": [
                "Exp 1: Open Circuit Characteristics (OCC) and Critical Resistance of DC Shunt Generator",
                "Exp 2: Load Test on DC Shunt Motor and Plotting Performance Torque-Speed Curves",
                "Exp 3: Speed Control of DC Shunt Motor by Armature Voltage and Field Flux Methods",
                "Exp 4: Open-Circuit (OC) and Short-Circuit (SC) Tests on Single-Phase Transformer",
                "Exp 5: Sumpner's (Back-to-Back) Test on Two Identical Single Phase Transformers"
            ],
            "vivaQuestions": [
                {
                    "q": "Why is a 3-point starter needed for starting a DC Shunt Motor?",
                    "a": "At start, armature back-emf is zero (Eb = 0). With low armature resistance, connecting directly across mains draws dangerously high starting currents (Ia = V/Ra). The starter limits this current."
                },
                {
                    "q": "Why are OC and SC tests conducted at LV and HV sides respectively in a transformer?",
                    "a": "OC test is conducted at rated voltage on the LV side for instrument safety and convenience. SC test is conducted on the HV side so rated full-load current is smaller and easily measurable."
                }
            ]
        },
        {
            "id": "note-eee-power-theory",
            "title": "Power System Analysis & Grid Protection Handwritten Notes",
            "branch": "EEE",
            "year": 3,
            "semester": "Sem 5",
            "type": "theory",
            "typeLabel": "\ud83d\udcd6 Handwritten Notes",
            "subjectCode": "PCC-EEE-301",
            "author": "EEE Faculty Power Systems Cell",
            "verified": true,
            "pages": 108,
            "fileSize": "10.8 MB",
            "downloads": 630,
            "rating": 4.8,
            "description": "Per-Unit calculations, symmetrical components, line inductance and capacitance derivations, Gauss-Seidel and Newton-Raphson load flow equations, symmetrical & unsymmetrical fault analysis.",
            "syllabusTopics": [
                "Per-Unit System Conversion",
                "Z-Bus & Y-Bus Building",
                "Symmetrical Fault Analysis",
                "Equal Area Stability Criterion"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-1st-maths-cheat",
            "title": "Engineering Mathematics-I & II Formula Cheat Sheet & PYQ Blueprint",
            "branch": "1ST",
            "year": 1,
            "semester": "Sem 1 & 2",
            "type": "cheat",
            "typeLabel": "\ud83d\udcdd Formula Cheat Sheet",
            "subjectCode": "BSC-MATH-101",
            "author": "Applied Sciences Faculty & DCE Toppers",
            "verified": true,
            "pages": 16,
            "fileSize": "2.4 MB",
            "downloads": 2140,
            "rating": 5.0,
            "description": "The ultimate lifesaver for 1st Year DCE students. Contains all formulas for Matrices (Eigenvalues, Cayley-Hamilton), Calculus (Taylor/Maclaurin series, Jacobians, Beta & Gamma functions), and ODEs.",
            "syllabusTopics": [
                "Eigenvalues & Cayley-Hamilton",
                "Jacobians & Multi-variable Maxima",
                "Higher Order Linear ODEs",
                "Beta & Gamma Integration"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-1st-physics-lab",
            "title": "Applied Physics & Optics Laboratory Manual with Viva Voce",
            "branch": "1ST",
            "year": 1,
            "semester": "Sem 1",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Manual & Viva",
            "subjectCode": "BSC-PHY-103",
            "author": "Applied Sciences Physics Wing",
            "verified": true,
            "pages": 46,
            "fileSize": "4.5 MB",
            "downloads": 1680,
            "rating": 4.9,
            "description": "Official laboratory manual for 1st Year physics practicals. Includes optical bench alignments, Newton's rings interference diameter formulas, diffraction grating calculations, and 30 viva voce questions.",
            "syllabusTopics": [
                "Newton's Rings Interference",
                "Diffraction Grating Spectrometer",
                "Hall Effect Coefficient",
                "Semiconductor Energy Band Gap"
            ],
            "experiments": [
                "Exp 1: Determination of Wavelength of Sodium Yellow Light using Newton's Rings",
                "Exp 2: Determination of Wavelength of Spectral Lines using Plane Transmission Grating",
                "Exp 3: Determination of Hall Coefficient and Carrier Concentration of Semiconductor",
                "Exp 4: Determination of Energy Band Gap (Eg) of a P-N Junction Diode using Reverse Saturation Current",
                "Exp 5: Measurement of Numerical Aperture and Acceptance Angle of an Optical Fiber"
            ],
            "vivaQuestions": [
                {
                    "q": "Why are Newton's Rings circular in shape?",
                    "a": "The air film enclosed between the plano-convex lens and optical glass plate has circular symmetry of constant thickness locus around the point of contact."
                },
                {
                    "q": "What happens to the fringe pattern if water is introduced instead of air?",
                    "a": "Since refractive index of water (1.33) is greater than air (1.0), the optical path difference decreases, causing the rings to contract and become narrower."
                },
                {
                    "q": "What is the Hall Effect and its primary application?",
                    "a": "When a magnetic field is applied perpendicular to a current-carrying conductor, a transverse voltage (Hall voltage) appears. It identifies charge carrier type (p or n-type) and carrier density."
                }
            ]
        },
        {
            "id": "note-1st-bee-theory",
            "title": "Basic Electrical & Electronics Engineering (BEE) Handwritten Notes",
            "branch": "1ST",
            "year": 1,
            "semester": "Sem 2",
            "type": "theory",
            "typeLabel": "\ud83d\udcd6 Handwritten Notes",
            "subjectCode": "ESC-EE-102",
            "author": "First Year Academic Cell",
            "verified": true,
            "pages": 82,
            "fileSize": "8.3 MB",
            "downloads": 1890,
            "rating": 4.9,
            "description": "Clean diagrams and step-by-step solved numericals for DC Network Theorems (Thevenin, Norton, Superposition, Maximum Power Transfer), Single-Phase AC Series/Parallel resonance, and 3-Phase Star-Delta.",
            "syllabusTopics": [
                "KVL & KCL Mesh Analysis",
                "Thevenin & Norton Theorems",
                "AC Series & Parallel Resonance",
                "3-Phase Star & Delta Power"
            ],
            "experiments": [],
            "vivaQuestions": []
        },
        {
            "id": "note-cse-cloud-lab",
            "title": "Cloud Computing & DevOps Lab Manual (AWS / Docker / Kubernetes)",
            "branch": "CSE",
            "year": 4,
            "semester": "Sem 7",
            "type": "lab",
            "typeLabel": "\ud83e\uddea Lab Manual & Viva",
            "subjectCode": "PEC-CSE-402",
            "author": "DCE Cloud Center of Excellence",
            "verified": true,
            "pages": 62,
            "fileSize": "5.6 MB",
            "downloads": 940,
            "rating": 4.9,
            "description": "Industry-grade practical handbook. Includes containerizing web apps with Docker, multi-container Docker-Compose orchestration, deploying microservices to Minikube Kubernetes, AWS EC2 & S3, and GitHub Actions CI/CD.",
            "syllabusTopics": [
                "Docker Multi-Stage Builds",
                "Kubernetes Deployments & Services",
                "AWS EC2 Linux Server & S3",
                "CI/CD Pipeline with GitHub Actions"
            ],
            "experiments": [
                "Exp 1: Installation and Basic Docker Commands (build, run, logs, exec, commit)",
                "Exp 2: Containerizing a Node.js / Python Flask Application with Optimized Dockerfile",
                "Exp 3: Multi-tier Architecture with Docker Compose (Node App + Redis + PostgreSQL)",
                "Exp 4: Kubernetes Local Cluster Deployment: Pods, ReplicaSets, and NodePort Services",
                "Exp 5: Setting up Continuous Integration & Deployment (CI/CD) with GitHub Actions and AWS EC2"
            ],
            "vivaQuestions": [
                {
                    "q": "What is the distinction between a Docker image and a Docker container?",
                    "a": "A Docker image is a read-only immutable blueprint or template with instructions. A container is a runnable, isolated instance of that image with its own writable top layer and network namespace."
                },
                {
                    "q": "Explain the role of Kubernetes Ingress vs NodePort.",
                    "a": "NodePort exposes a service on each node's IP at a static port (30000-32767). Ingress acts as an intelligent HTTP/HTTPS reverse proxy and load balancer routing requests based on path/host."
                }
            ]
        }
    ],
    poll: {
      question: 'Should the DCE Central Library keep 24/7 reading halls open during Minor exams as well?',
      totalVotes: 542,
      userVoted: false,
      userChoice: null,
      options: [
        { id: 1, text: 'Yes! Silent study space is needed for Minors too', votes: 412 },
        { id: 2, text: 'No, only during End-Semesters', votes: 98 },
        { id: 3, text: 'Keep open until 2:00 AM instead', votes: 32 }
      ]
    },
    kindness: [
      { text: "Breathe easy, DCE batchmates! One low internal score does not decide your career. Keep practicing, consistency beats brilliance every time. 🌟", author: "Final Year Senior, Placed at Oracle" },
      { text: "Drink some water, step out to Nescafe for a cutting chai, and don't skip your canteen meals. Exam stress is temporary, health is permanent! ☕", author: "DCE 3rd Year Hosteller" },
      { text: "Shoutout to the batchmate who helped 15 of us understand Laplace Transforms the night before M-3 exam. You are a real hero! 📐", author: "2nd Year Mechanical" },
      { text: "If you are struggling with DSA or placement rounds, ping any senior on CampusPulse, we will take your mock interview for free! 💻", author: "Placed CSE Senior TA" }
    ],
    notifications: [
      { id: 'n1', text: '🍕 Hot Samosas & Kachoris at Seminar Hall 2 Ground Floor!', time: '15m ago', unread: true, icon: '🍕' },
      { id: 'n2', text: '🎯 GATE CSE 2027 Study Circle meeting at DCE Library at 5:30 PM.', time: '40m ago', unread: true, icon: '📅' },
      { id: 'n3', text: '🛡️ DCE Suraksha Night Escorts operational till 3:30 AM.', time: '2h ago', unread: true, icon: '🛡️' }
    ]
  };

  // ==========================================
  // STATE MANAGEMENT
  // ==========================================

  let state = {};

  function loadState() {
    try {
      const saved = localStorage.getItem('dce_campuspulse_v6');
      if (saved) {
        state = JSON.parse(saved);
        if (!state.notes || !Array.isArray(state.notes) || state.notes.length === 0) {
          state.notes = JSON.parse(JSON.stringify(DEFAULT_DATA.notes));
        }
        if (!state.timetable || !Array.isArray(state.timetable) || state.timetable.length === 0) {
          state.timetable = JSON.parse(JSON.stringify(DEFAULT_DATA.timetable));
        }
        if (!state.user) {
          state.user = JSON.parse(JSON.stringify(DEFAULT_DATA.user));
        }
      } else {
        state = JSON.parse(JSON.stringify(DEFAULT_DATA));
        saveState();
      }
    } catch (e) {
      console.warn('Could not load localStorage, using defaults', e);
      state = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }

  function saveState() {
    try {
      localStorage.setItem('dce_campuspulse_v6', JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }

  // ==========================================
  // WEB AUDIO API SOUND GENERATOR
  // ==========================================

  const audio = {
    ctx: null,
    rainNode: null,
    rainGain: null,
    cafeNode: null,
    cafeGain: null,
    binauralOsc1: null,
    binauralOsc2: null,
    binauralGain: null,
    playing: { rain: false, cafe: false, binaural: false },

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    },

    createBrownNoise() {
      const bufferSize = 2 * this.ctx.sampleRate;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(750, this.ctx.currentTime);

      whiteNoise.connect(filter);
      return { source: whiteNoise, out: filter };
    },

    createPinkNoise() {
      const bufferSize = 2 * this.ctx.sampleRate;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }
      const pinkSource = this.ctx.createBufferSource();
      pinkSource.buffer = noiseBuffer;
      pinkSource.loop = true;

      const bandFilter = this.ctx.createBiquadFilter();
      bandFilter.type = 'bandpass';
      bandFilter.frequency.setValueAtTime(420, this.ctx.currentTime);
      bandFilter.Q.setValueAtTime(1.4, this.ctx.currentTime);

      pinkSource.connect(bandFilter);
      return { source: pinkSource, out: bandFilter };
    },

    toggleRain(vol = 0.5) {
      this.init();
      if (!this.ctx) return;
      if (this.playing.rain) {
        if (this.rainNode) {
          try { this.rainNode.stop(); } catch (e) {}
          this.rainNode = null;
        }
        this.playing.rain = false;
        return false;
      } else {
        const noise = this.createBrownNoise();
        this.rainGain = this.ctx.createGain();
        this.rainGain.gain.setValueAtTime(vol, this.ctx.currentTime);
        noise.out.connect(this.rainGain);
        this.rainGain.connect(this.ctx.destination);
        noise.source.start(0);
        this.rainNode = noise.source;
        this.playing.rain = true;
        return true;
      }
    },

    toggleCafe(vol = 0.4) {
      this.init();
      if (!this.ctx) return;
      if (this.playing.cafe) {
        if (this.cafeNode) {
          try { this.cafeNode.stop(); } catch (e) {}
          this.cafeNode = null;
        }
        this.playing.cafe = false;
        return false;
      } else {
        const noise = this.createPinkNoise();
        this.cafeGain = this.ctx.createGain();
        this.cafeGain.gain.setValueAtTime(vol, this.ctx.currentTime);
        noise.out.connect(this.cafeGain);
        this.cafeGain.connect(this.ctx.destination);
        noise.source.start(0);
        this.cafeNode = noise.source;
        this.playing.cafe = true;
        return true;
      }
    },

    toggleBinaural(vol = 0.3) {
      this.init();
      if (!this.ctx) return;
      if (this.playing.binaural) {
        if (this.binauralOsc1) {
          try {
            this.binauralOsc1.stop();
            this.binauralOsc2.stop();
          } catch (e) {}
          this.binauralOsc1 = null;
          this.binauralOsc2 = null;
        }
        this.playing.binaural = false;
        return false;
      } else {
        this.binauralGain = this.ctx.createGain();
        this.binauralGain.gain.setValueAtTime(vol, this.ctx.currentTime);

        this.binauralOsc1 = this.ctx.createOscillator();
        this.binauralOsc2 = this.ctx.createOscillator();

        this.binauralOsc1.type = 'sine';
        this.binauralOsc1.frequency.setValueAtTime(432, this.ctx.currentTime);

        this.binauralOsc2.type = 'sine';
        this.binauralOsc2.frequency.setValueAtTime(442, this.ctx.currentTime);

        this.binauralOsc1.connect(this.binauralGain);
        this.binauralOsc2.connect(this.binauralGain);
        this.binauralGain.connect(this.ctx.destination);

        this.binauralOsc1.start();
        this.binauralOsc2.start();
        this.playing.binaural = true;
        return true;
      }
    },

    setVolume(type, val) {
      if (!this.ctx) return;
      val = parseFloat(val);
      if (type === 'rain' && this.rainGain) {
        this.rainGain.gain.setValueAtTime(val, this.ctx.currentTime);
      } else if (type === 'cafe' && this.cafeGain) {
        this.cafeGain.gain.setValueAtTime(val, this.ctx.currentTime);
      } else if (type === 'binaural' && this.binauralGain) {
        this.binauralGain.gain.setValueAtTime(val, this.ctx.currentTime);
      }
    },

    stopAll() {
      if (this.playing.rain) this.toggleRain();
      if (this.playing.cafe) this.toggleCafe();
      if (this.playing.binaural) this.toggleBinaural();
    },

    playChime() {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 1.2);
    }
  };

  // ==========================================
  // POMODORO TIMER CORE
  // ==========================================

  const timer = {
    mode: 'work',
    durations: {
      work: 25 * 60,
      shortBreak: 5 * 60,
      longBreak: 15 * 60
    },
    timeLeft: 25 * 60,
    intervalId: null,
    isRunning: false,
    sessionCount: 1,

    init() {
      this.updateDisplay();
    },

    setMode(newMode) {
      this.mode = newMode;
      this.pause();
      this.timeLeft = this.durations[newMode];
      this.updateDisplay();

      document.querySelectorAll('.timer-pill').forEach(b => b.classList.remove('active'));
      const activeBtn = document.getElementById(
        newMode === 'work' ? 'timerModeWork' : (newMode === 'shortBreak' ? 'timerModeShortBreak' : 'timerModeLongBreak')
      );
      if (activeBtn) activeBtn.classList.add('active');

      const statusLabel = document.getElementById('timerStatusLabel');
      if (statusLabel) {
        statusLabel.textContent = newMode === 'work' ? 'Deep Study Sprint' : (newMode === 'shortBreak' ? 'Chai Break ☕' : 'Mess Meal Break');
      }
    },

    toggle() {
      if (this.isRunning) {
        this.pause();
      } else {
        this.start();
      }
    },

    start() {
      if (this.isRunning) return;
      this.isRunning = true;
      audio.init();

      const startBtn = document.getElementById('timerStartPauseBtn');
      if (startBtn) {
        startBtn.textContent = 'Pause Session';
        startBtn.classList.add('btn-secondary');
        startBtn.classList.remove('btn-primary');
      }

      this.intervalId = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.updateDisplay();
        } else {
          this.handleComplete();
        }
      }, 1000);
    },

    pause() {
      this.isRunning = false;
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      const startBtn = document.getElementById('timerStartPauseBtn');
      if (startBtn) {
        startBtn.textContent = 'Start Focus Session';
        startBtn.classList.add('btn-primary');
        startBtn.classList.remove('btn-secondary');
      }
    },

    reset() {
      this.pause();
      this.timeLeft = this.durations[this.mode];
      this.updateDisplay();
    },

    handleComplete() {
      this.pause();
      audio.playChime();

      if (this.mode === 'work') {
        state.user.focusMins += 25;
        saveState();
        app.updateUserStatsUI();
        app.toast('🎉 Great study sprint! 25 minutes logged at DCE.', 'success');

        if (this.sessionCount < 4) {
          this.sessionCount++;
          this.setMode('shortBreak');
        } else {
          this.sessionCount = 1;
          this.setMode('longBreak');
        }
      } else {
        app.toast('Break over! Ready for the next sprint?', 'info');
        this.setMode('work');
      }
      const counterEl = document.getElementById('timerSessionCounter');
      if (counterEl) counterEl.textContent = `Sprint ${this.sessionCount} of 4`;
    },

    updateDisplay() {
      const mins = Math.floor(this.timeLeft / 60);
      const secs = this.timeLeft % 60;
      const displayStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

      const textEl = document.getElementById('timerMinutesSeconds');
      if (textEl) textEl.textContent = displayStr;

      const circle = document.getElementById('timerProgressRing');
      if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        const total = this.durations[this.mode];
        const progress = (total - this.timeLeft) / total;
        const offset = circumference - (progress * circumference);
        circle.style.strokeDashoffset = offset;
      }
    }
  };

  // ==========================================
  // MAIN APP CONTROLLER
  // ==========================================

  const app = {
    activeSection: 'radar',
    mapZoom: 1,
    activeAmenityLayers: { xerox: true, maggi: true, water: true, kettle: true, dispensary: true, security: true },
    activeNoteBranch: 'all',
    activeNoteYear: 'all',
    activeNoteType: 'all',
    notesSearchQuery: '',
    activeTimeTableBranch: 'CSE',
    activeTimeTableSem: '3',
    activeTimeTableDay: 'today',
    activeTimeTableBatch: 'all',
    timeTableSearchQuery: '',
    timeTableViewMode: 'timeline',

    init() {
      loadState();
      this.applyTheme(state.theme || 'light');
      this.renderAll();
      timer.init();
      this.setupEventListeners();
      this.setupCommandPalette();
      this.startLiveSimulation();
    },

    // ==========================================
    // THEME MANAGEMENT
    // ==========================================

    applyTheme(theme) {
      state.theme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      const icon = document.getElementById('themeIcon');
      if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      saveState();
    },

    toggleTheme() {
      const next = state.theme === 'dark' ? 'light' : 'dark';
      this.applyTheme(next);
      this.toast(`Switched to ${next} mode`, 'info');
    },

    // ==========================================
    // SECTION NAVIGATION
    // ==========================================

    showSection(secId) {
      this.activeSection = secId;
      document.querySelectorAll('.tab-section').forEach(sec => sec.classList.add('hidden'));
      const targetSec = document.getElementById(`sec-${secId}`);
      if (targetSec) targetSec.classList.remove('hidden');

      document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.getAttribute('data-tab') === secId) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    dismissAlertStrip() {
      const strip = document.getElementById('campusAlertStrip');
      if (strip) strip.classList.add('dismissed');
    },

    // ==========================================
    // RENDERING LOGIC
    // ==========================================

    renderAll() {
      this.renderRadarSpots();
      this.renderNotes();
      this.renderTimeTable();
      this.renderStudyGroups();
      this.renderDining();
      this.renderMapPins();
      this.renderFeed();
      this.renderMarket();
      this.renderPoll();
      this.renderKindnessWall();
      this.renderNotifications();
      this.updateUserStatsUI();
    },

    updateUserStatsUI() {
      const nameEl = document.getElementById('userDisplayName');
      const roleEl = document.getElementById('userDisplayRole');
      const modalNameEl = document.getElementById('modalUserName');
      const modalMajorEl = document.getElementById('modalUserMajor');
      const initialsEl = document.getElementById('userInitials');
      const modalInitialsEl = document.getElementById('modalUserInitials');
      const badgeEl = document.getElementById('headerProfileBadge');
      const rollBadge = document.getElementById('modalRollBadge');
      const mobileBadge = document.getElementById('modalMobileBadge');
      const promptBanner = document.getElementById('loginPromptBanner');
      const logoutBtn = document.getElementById('btnLogoutStudent');

      const isLogged = state.user && state.user.isLoggedIn;

      if (isLogged) {
        if (nameEl) nameEl.textContent = state.user.name;
        if (roleEl) roleEl.textContent = `Roll: ${state.user.rollNumber} • ${state.user.branch || 'CSE'}`;
        if (modalNameEl) modalNameEl.textContent = state.user.name;
        if (modalMajorEl) modalMajorEl.textContent = state.user.major || `B.Tech ${state.user.branch || 'CSE'} • Sem ${state.user.semester || 3} • DCE`;
        if (initialsEl) initialsEl.textContent = state.user.initials || 'ST';
        if (modalInitialsEl) modalInitialsEl.textContent = state.user.initials || 'ST';
        if (badgeEl) badgeEl.classList.remove('guest');

        if (rollBadge) {
          rollBadge.textContent = `✓ Verified Roll: ${state.user.rollNumber}`;
          rollBadge.style.display = 'inline-block';
        }
        if (mobileBadge) {
          mobileBadge.textContent = `📱 +91 ${state.user.mobileNumber}`;
          mobileBadge.style.display = 'inline-block';
        }
        if (promptBanner) promptBanner.classList.add('hidden');
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
      } else {
        if (nameEl) nameEl.textContent = 'Student Login';
        if (roleEl) roleEl.textContent = 'Roll No & Mobile';
        if (modalNameEl) modalNameEl.textContent = 'Guest Student';
        if (modalMajorEl) modalMajorEl.textContent = 'Dronacharya College of Engineering (Not Logged In)';
        if (initialsEl) initialsEl.textContent = '🔑';
        if (modalInitialsEl) modalInitialsEl.textContent = 'DCE';
        if (badgeEl) badgeEl.classList.add('guest');

        if (rollBadge) {
          rollBadge.textContent = 'Roll: Not Logged In';
        }
        if (mobileBadge) {
          mobileBadge.textContent = '📱 Mobile: Unregistered';
        }
        if (promptBanner) promptBanner.classList.remove('hidden');
        if (logoutBtn) logoutBtn.style.display = 'none';
      }

      // Always ensure welcome banner says "Welcome! 👋"
      const welcomeH2 = document.getElementById('heroWelcomeHeading');
      if (welcomeH2) welcomeH2.textContent = 'Welcome! 👋';

      const gCount = document.getElementById('userStatsGroups');
      const karma = document.getElementById('userStatsKarma');
      const focus = document.getElementById('userStatsFocusMins');
      if (gCount) gCount.textContent = (state.user.joinedGroups || []).length;
      if (karma) karma.textContent = state.user.karma || 100;
      if (focus) focus.textContent = state.user.focusMins || 0;

      const gBadge = document.getElementById('groupsCountBadge');
      if (gBadge) gBadge.textContent = `${(state.groups || []).length} Circles`;
    },

    // 1. Radar Spots
    renderRadarSpots(filter = 'all', searchQuery = '') {
      const container = document.getElementById('spotsGridContainer');
      if (!container) return;

      let spots = state.spots;
      if (filter === 'quiet') {
        spots = spots.filter(s => s.noiseDb < 35);
      } else if (filter === 'open') {
        spots = spots.filter(s => s.occupancy < 50);
      } else if (filter !== 'all') {
        spots = spots.filter(s => s.category === filter);
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        spots = spots.filter(s => s.name.toLowerCase().includes(q) || s.building.toLowerCase().includes(q));
      }

      container.innerHTML = spots.map(spot => {
        let occClass = 'low';
        let occColor = '🟢 Silent & Open Desks';
        if (spot.occupancy > 75) {
          occClass = 'high';
          occColor = '🔴 Crowded / Filling Fast';
        } else if (spot.occupancy >= 45) {
          occClass = 'medium';
          occColor = '🟡 Moderate Crowd';
        }

        const pills = spot.amenities.map(a => `<span class="spot-pill">${a}</span>`).join('');

        return `
          <div class="spot-card" onclick="app.openSpotDetail('${spot.id}')">
            <div class="spot-header">
              <div class="spot-title-wrap">
                <h3>${spot.name}</h3>
                <span class="spot-building">${spot.building} • ${spot.hours}</span>
              </div>
              <span class="spot-noise-tag ${spot.noiseTag}">
                <span>🔊</span> ${spot.noiseDb} dB (${spot.noiseTag})
              </span>
            </div>

            <div class="occupancy-meter-wrap">
              <div class="occupancy-labels">
                <span>Live Capacity: <strong class="occupancy-percent">${spot.occupancy}%</strong></span>
                <span>${occColor}</span>
              </div>
              <div class="occupancy-bar-bg">
                <div class="occupancy-bar-fill ${occClass}" style="width: ${spot.occupancy}%"></div>
              </div>
            </div>

            <div class="spot-features-pills">
              ${pills}
            </div>

            <div class="spot-footer">
              <span><strong>${spot.seatsAvailable}</strong> seats open now</span>
              <button class="btn-secondary btn-sm" onclick="event.stopPropagation(); app.checkInToSpot('${spot.id}')">
                Check In (+5 Karma)
              </button>
            </div>
          </div>
        `;
      }).join('');
    },

    filterRadar(category) {
      document.querySelectorAll('#radarFilters .chip').forEach(c => c.classList.remove('active'));
      const activeChip = document.querySelector(`#radarFilters .chip[data-filter="${category}"]`);
      if (activeChip) activeChip.classList.add('active');
      const search = document.getElementById('radarSearchInput')?.value || '';
      this.renderRadarSpots(category, search);
    },

    searchRadar(query) {
      const activeChip = document.querySelector('#radarFilters .chip.active');
      const cat = activeChip ? activeChip.getAttribute('data-filter') : 'all';
      this.renderRadarSpots(cat, query);
    },

    checkInToSpot(spotId) {
      const spot = state.spots.find(s => s.id === spotId);
      if (!spot) return;
      state.user.karma += 5;
      saveState();
      this.updateUserStatsUI();
      this.toast(`Checked in to ${spot.name}! +5 Campus Karma earned.`, 'success');
    },

    openSpotDetail(spotId) {
      const spot = state.spots.find(s => s.id === spotId);
      if (!spot) return;
      const modal = document.getElementById('spotDetailModal');
      const content = document.getElementById('spotDetailContent');
      if (!modal || !content) return;

      content.innerHTML = `
        <div class="modal-header">
          <h3>${spot.name}</h3>
          <button class="modal-close-btn" onclick="app.closeModal('spotDetailModal')">✕</button>
        </div>
        <p class="hero-desc">${spot.building} • ${spot.hours}</p>
        
        <div class="occupancy-meter-wrap" style="margin: 20px 0;">
          <div class="occupancy-labels">
            <span>Total Capacity: <strong>${spot.capacity} study desks</strong></span>
            <span><strong>${spot.occupancy}% Occupied</strong></span>
          </div>
          <div class="occupancy-bar-bg" style="height: 12px;">
            <div class="occupancy-bar-fill ${spot.occupancy > 75 ? 'high' : (spot.occupancy > 45 ? 'medium' : 'low')}" style="width: ${spot.occupancy}%"></div>
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 0.95rem; margin-bottom: 8px;">DCE Facilities:</h4>
          <div class="spot-features-pills">
            ${spot.amenities.map(a => `<span class="spot-pill" style="font-size: 0.82rem; padding: 4px 10px;">✓ ${a}</span>`).join('')}
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-secondary" onclick="app.showOnMap('${spot.building}')">Show on Campus Map</button>
          <button class="btn-primary" onclick="app.checkInToSpot('${spot.id}'); app.closeModal('spotDetailModal');">Check In Here</button>
        </div>
      `;
      modal.showModal();
    },

    // 2. Study Circles
    renderStudyGroups(filter = 'all', searchQuery = '') {
      const container = document.getElementById('groupsGridContainer');
      if (!container) return;

      let groups = state.groups;
      if (filter === 'today') {
        groups = groups.filter(g => g.meetTime.toLowerCase().includes('today'));
      } else if (filter !== 'all') {
        groups = groups.filter(g => g.category === filter);
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        groups = groups.filter(g => g.course.toLowerCase().includes(q) || g.title.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q));
      }

      container.innerHTML = groups.map(g => {
        const isJoined = state.user.joinedGroups.includes(g.id);
        const openSeats = g.maxSeats - g.attendees.length;
        const avatarStack = g.attendees.map(a => `<div class="attendee-avatar">${a}</div>`).join('');

        return `
          <div class="group-card">
            <div class="group-top">
              <span class="course-badge">${g.course}</span>
              <span class="group-seats-badge">${openSeats > 0 ? `🟢 ${openSeats} slots left` : '🔴 Full'}</span>
            </div>
            <h3>${g.title}</h3>
            
            <div class="group-info-row">
              <span>⏰</span> <span>${g.meetTime}</span>
            </div>
            <div class="group-info-row">
              <span>📍</span> <span>${g.location}</span>
            </div>
            <div class="group-info-row">
              <span>👤 Host:</span> <span>${g.host}</span>
            </div>

            <p>${g.desc}</p>

            <div class="group-attendees-row">
              <div class="attendee-stack" title="${g.attendees.join(', ')}">
                ${avatarStack}
              </div>
              <button class="${isJoined ? 'btn-secondary btn-sm' : 'btn-primary btn-sm'}" onclick="app.toggleJoinGroup('${g.id}')">
                ${isJoined ? '✓ Joined' : 'RSVP & Join'}
              </button>
            </div>
          </div>
        `;
      }).join('');
    },

    filterGroups(category) {
      document.querySelectorAll('#groupFilters .chip').forEach(c => c.classList.remove('active'));
      const activeChip = document.querySelector(`#groupFilters .chip[data-group-filter="${category}"]`);
      if (activeChip) activeChip.classList.add('active');
      const search = document.getElementById('groupSearchInput')?.value || '';
      this.renderStudyGroups(category, search);
    },

    searchGroups(q) {
      const activeChip = document.querySelector('#groupFilters .chip.active');
      const cat = activeChip ? activeChip.getAttribute('data-group-filter') : 'all';
      this.renderStudyGroups(cat, q);
    },

    toggleJoinGroup(groupId) {
      const group = state.groups.find(g => g.id === groupId);
      if (!group) return;

      const idx = state.user.joinedGroups.indexOf(groupId);
      if (idx > -1) {
        state.user.joinedGroups.splice(idx, 1);
        group.attendees = group.attendees.filter(a => a !== state.user.initials);
        this.toast(`Left study circle for ${group.course}`, 'info');
      } else {
        if (group.attendees.length >= group.maxSeats) {
          this.toast('Sorry, this circle is currently full!', 'alert');
          return;
        }
        state.user.joinedGroups.push(groupId);
        group.attendees.push(state.user.initials);
        state.user.karma += 10;
        this.toast(`Joined ${group.course}! Slot confirmed at DCE. +10 Karma`, 'success');
      }
      saveState();
      this.renderStudyGroups();
      this.updateUserStatsUI();
    },

    // 3. Smart Dining & Canteen
    activeMeal: 'lunch',
    activeDiet: 'all',
    activeHall: 'all',

    renderDining() {
      const container = document.getElementById('diningGridContainer');
      if (!container) return;

      let dishes = state.dining.filter(d => d.meal === this.activeMeal);

      if (this.activeDiet !== 'all') {
        dishes = dishes.filter(d => d.diets.includes(this.activeDiet));
      }

      if (this.activeHall !== 'all') {
        dishes = dishes.filter(d => d.hallKey === this.activeHall);
      }

      if (dishes.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
            No dishes matching this dietary filter for ${this.activeMeal}. Try another canteen or filter!
          </div>
        `;
        return;
      }

      container.innerHTML = dishes.map(dish => {
        const dietPills = dish.diets.map(diet => {
          let label = diet;
          let cls = diet;
          if (diet === 'veg') label = '100% Pure Veg';
          if (diet === 'nonveg') label = 'Non-Veg / Egg';
          if (diet === 'jain') label = '🌱 Jain Friendly';
          if (diet === 'protein') label = '💪 High Protein';
          if (diet === 'budget') label = '🏷️ Pocket Friendly';
          return `<span class="diet-tag ${cls}">${label}</span>`;
        }).join('');

        const isVeg = dish.diets.includes('veg');

        return `
          <div class="dish-card">
            <div class="dish-location-header">
              <span>📍 ${dish.location}</span>
              <span class="dish-wait-time">⏳ ${dish.waitTime}</span>
            </div>

            <h3>
              <span class="${isVeg ? 'veg-symbol' : 'nonveg-symbol'}"></span>
              ${dish.name}
            </h3>

            <div class="dish-diet-tags">
              ${dietPills}
            </div>

            <div class="dish-nutrition-row">
              <span>⚡ ${dish.calories} kcal</span>
              <span>🥩 ${dish.protein} protein</span>
            </div>

            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.45;">
              ${dish.description}
            </p>

            <div class="dish-card-footer">
              <span class="dish-rating">★ ${dish.rating} <span style="color: var(--text-muted); font-size: 0.74rem;">(${dish.reviewsCount} reviews)</span></span>
              <span class="dish-price">${dish.price}</span>
            </div>
          </div>
        `;
      }).join('');
    },

    switchMeal(meal) {
      this.activeMeal = meal;
      document.querySelectorAll('.dining-meal-switch .meal-btn').forEach(b => b.classList.remove('active'));
      const btn = document.querySelector(`.dining-meal-switch .meal-btn[data-meal="${meal}"]`);
      if (btn) btn.classList.add('active');
      this.renderDining();
    },

    filterDiningDiet(diet) {
      this.activeDiet = diet;
      document.querySelectorAll('#diningDietFilters .chip').forEach(c => c.classList.remove('active'));
      const activeChip = document.querySelector(`#diningDietFilters .chip[data-diet="${diet}"]`);
      if (activeChip) activeChip.classList.add('active');
      this.renderDining();
    },

    filterDiningHall(hall) {
      this.activeHall = hall;
      this.renderDining();
    },

    // 4. Interactive Campus Map
    renderMapPins() {
      const layer = document.getElementById('mapPinsLayer');
      if (!layer) return;

      const activePins = state.amenityPins.filter(pin => this.activeAmenityLayers[pin.type]);

      layer.innerHTML = activePins.map(pin => {
        let pinColor = '#10b981';
        if (pin.type === 'xerox') pinColor = '#2563eb';
        if (pin.type === 'maggi') pinColor = '#f59e0b';
        if (pin.type === 'water') pinColor = '#06b6d4';
        if (pin.type === 'kettle') pinColor = '#8b5cf6';
        if (pin.type === 'dispensary') pinColor = '#ef4444';
        if (pin.type === 'security') pinColor = '#d97706';

        return `
          <g class="map-pin" transform="translate(${pin.x}, ${pin.y})" onclick="app.selectAmenityPin('${pin.id}')">
            <circle cx="0" cy="0" r="16" fill="${pinColor}" fill-opacity="0.25" class="pulse-beacon"/>
            <circle cx="0" cy="0" r="10" fill="${pinColor}" stroke="#ffffff" stroke-width="2"/>
            <text x="0" y="4" text-anchor="middle" font-size="10" fill="#ffffff" pointer-events="none">${pin.icon}</text>
          </g>
        `;
      }).join('');
    },

    toggleMapLayer(layerName, isChecked) {
      this.activeAmenityLayers[layerName] = isChecked;
      this.renderMapPins();
    },

    selectAmenityPin(pinId) {
      const pin = state.amenityPins.find(p => p.id === pinId);
      if (!pin) return;

      const inspector = document.getElementById('pinInspector');
      const icon = document.getElementById('inspectorIcon');
      const title = document.getElementById('inspectorTitle');
      const desc = document.getElementById('inspectorDesc');
      if (inspector && icon && title && desc) {
        icon.textContent = pin.icon;
        title.textContent = `${pin.name} (${pin.loc})`;
        desc.textContent = pin.desc;
        inspector.classList.remove('hidden');
      }
    },

    closePinInspector() {
      const inspector = document.getElementById('pinInspector');
      if (inspector) inspector.classList.add('hidden');
    },

    selectBuilding(buildingKey) {
      let bName = 'Campus Building';
      let bDesc = 'Essential academic and research facility.';
      if (buildingKey === 'library') {
        bName = 'DCE Central Library';
        bDesc = 'Air-conditioned 4 floors with 122 desks open right now on 3rd floor. 24/7 access during exams.';
      } else if (buildingKey === 'student-center') {
        bName = 'DCE Main Canteen';
        bDesc = 'Sharma 24/7 Xerox, Nescafe Tapri, and student dining court.';
      } else if (buildingKey === 'engineering') {
        bName = 'Aryabhata Tech Complex & Computer Centre';
        bDesc = 'High-speed LAN, Tinkering Maker Lab, Robotics Arena, and lecture halls.';
      } else if (buildingKey === 'rec-center') {
        bName = 'DCE Sports Hub';
        bDesc = 'Badminton courts, gymnasium, table tennis, and 24/7 emergency dispensary.';
      } else if (buildingKey === 'dorm-commons') {
        bName = 'DCE Hostel Quad';
        bDesc = 'Hostel blocks, mess hall, and late-night Maggi corners.';
      }

      const inspector = document.getElementById('pinInspector');
      const icon = document.getElementById('inspectorIcon');
      const title = document.getElementById('inspectorTitle');
      const desc = document.getElementById('inspectorDesc');
      if (inspector && icon && title && desc) {
        icon.textContent = '🏢';
        title.textContent = bName;
        desc.textContent = bDesc;
        inspector.classList.remove('hidden');
      }
    },

    calculateWalkRoute() {
      const from = document.getElementById('dirFromSelect')?.value;
      const resultBox = document.getElementById('routeResultBox');
      const pathEl = document.getElementById('activeRoutePath');
      if (!resultBox) return;

      let timeMins = 3;
      let distMeters = 220;
      let pathD = "M 230 335 L 500 340 L 500 190";

      if (from === 'eng-hall') {
        timeMins = 4;
        distMeters = 340;
        pathD = "M 770 335 L 500 340 L 470 190";
      } else if (from === 'hostel-quad') {
        timeMins = 5;
        distMeters = 420;
        pathD = "M 690 535 L 500 480 L 500 340";
      }

      if (pathEl) {
        pathEl.setAttribute('d', pathD);
        pathEl.classList.remove('hidden');
      }

      resultBox.innerHTML = `
        <strong>⚡ Estimated Walk Time: ${timeMins} mins (${distMeters} m)</strong><br>
        <span>Recommended path: via DCE Central Lawns. Well-lit route with security checkpost.</span>
      `;
      resultBox.classList.remove('hidden');
      this.toast(`Route calculated: ${timeMins} min walk`, 'info');
    },

    zoomMap(factor) {
      this.mapZoom = Math.min(2.0, Math.max(0.7, this.mapZoom * factor));
      const svg = document.getElementById('campusMapSvg');
      if (svg) svg.style.transform = `scale(${this.mapZoom})`;
    },

    resetMapZoom() {
      this.mapZoom = 1;
      const svg = document.getElementById('campusMapSvg');
      if (svg) svg.style.transform = 'scale(1)';
    },

    showOnMap(buildingName) {
      this.closeModal('spotDetailModal');
      this.showSection('map');
      this.toast(`Locating ${buildingName} on Campus Map`, 'info');
    },

    navigateHereFromSelected() {
      this.calculateWalkRoute();
      this.toast('Destination pinned on DCE map!', 'success');
    },

    // 5. Live Campus Feed
    renderFeed(category = 'all', searchQuery = '') {
      const container = document.getElementById('postsContainer');
      if (!container) return;

      let posts = state.feed;
      if (category !== 'all') {
        posts = posts.filter(p => p.category === category);
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        posts = posts.filter(p => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q) || p.location.toLowerCase().includes(q));
      }

      container.innerHTML = posts.map(post => {
        const isUpvoted = state.user.upvotedPosts.includes(post.id);

        return `
          <div class="post-card ${post.isFood ? 'food-highlight' : ''}">
            <div class="post-header">
              <div class="post-author-group">
                <div class="avatar-ring">${post.authorAvatar}</div>
                <div>
                  <span class="post-author-name">${post.author}</span>
                  <div class="post-meta-text">${post.role} • ${post.timeAgo}</div>
                </div>
              </div>
              <span class="post-badge ${post.category}">${post.badge}</span>
            </div>

            <h3>${post.title}</h3>
            <p>${post.content}</p>

            <div class="post-location-tag">
              <span>📍</span> <span>${post.location}</span>
            </div>

            <div class="post-footer-actions">
              <button class="post-action-btn ${isUpvoted ? 'upvoted' : ''}" onclick="app.toggleUpvotePost('${post.id}')">
                <span>▲</span> <span>${post.upvotes}</span> <span>Upvotes</span>
              </button>
              <button class="post-action-btn" onclick="app.commentOnPost('${post.id}')">
                <span>💬</span> <span>${post.commentsCount} Comments</span>
              </button>
              <button class="post-action-btn" onclick="app.sharePost('${post.id}')">
                <span>🔗 Share</span>
              </button>
            </div>
          </div>
        `;
      }).join('');
    },

    filterFeed(category) {
      document.querySelectorAll('#feedFilters .chip').forEach(c => c.classList.remove('active'));
      const activeChip = document.querySelector(`#feedFilters .chip[data-feed-cat="${category}"]`);
      if (activeChip) activeChip.classList.add('active');
      this.renderFeed(category);
    },

    filterFeedSearch(hashtag) {
      this.renderFeed('all', hashtag.replace('#', ''));
      this.toast(`Filtering stream for ${hashtag}`, 'info');
    },

    toggleUpvotePost(postId) {
      const post = state.feed.find(p => p.id === postId);
      if (!post) return;

      const idx = state.user.upvotedPosts.indexOf(postId);
      if (idx > -1) {
        state.user.upvotedPosts.splice(idx, 1);
        post.upvotes--;
      } else {
        state.user.upvotedPosts.push(postId);
        post.upvotes++;
        state.user.karma += 2;
        this.toast('Upvoted post! +2 Campus Karma', 'success');
      }
      saveState();
      this.renderFeed();
      this.updateUserStatsUI();
    },

    commentOnPost(postId) {
      const comment = prompt("Reply to this student broadcast:");
      if (comment && comment.trim()) {
        const post = state.feed.find(p => p.id === postId);
        if (post) {
          post.commentsCount++;
          state.user.karma += 3;
          saveState();
          this.renderFeed();
          this.updateUserStatsUI();
          this.toast('Comment posted! +3 Karma', 'success');
        }
      }
    },

    sharePost(postId) {
      navigator.clipboard?.writeText(window.location.href);
      this.toast('Link copied to clipboard!', 'info');
    },

    // 6. Student Bazaar
    renderMarket(category = 'all', searchQuery = '') {
      const container = document.getElementById('marketGridContainer');
      if (!container) return;

      let items = state.market;
      if (category !== 'all') {
        items = items.filter(m => m.type === category);
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        items = items.filter(m => m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q));
      }

      container.innerHTML = items.map(item => {
        let typeBadge = item.type;
        if (item.type === 'skills') typeBadge = '🤝 ₹0 Barter';
        if (item.type === 'books') typeBadge = '📖 Textbook';
        if (item.type === 'engg') typeBadge = '📐 Engg Gear';
        if (item.type === 'dorm') typeBadge = '🛏️ Hostel Life';
        if (item.type === 'free') typeBadge = '🎁 Free';

        return `
          <div class="market-card">
            <div class="market-card-top">
              <span class="market-type-tag ${item.type}">${typeBadge}</span>
              <span class="market-price">${item.price}</span>
            </div>

            <h3>${item.title}</h3>
            <p>${item.desc}</p>

            <div class="market-seller-row">
              <div class="seller-info">
                <div class="avatar-ring" style="width:26px; height:26px; font-size:0.68rem;">${item.sellerAvatar}</div>
                <span>${item.seller} • ${item.timeAgo}</span>
              </div>
              <button class="btn-primary btn-sm" onclick="app.contactSeller('${item.id}')">
                Connect / Trade
              </button>
            </div>
          </div>
        `;
      }).join('');
    },

    filterMarket(category) {
      document.querySelectorAll('#marketFilters .chip').forEach(c => c.classList.remove('active'));
      const activeChip = document.querySelector(`#marketFilters .chip[data-market-cat="${category}"]`);
      if (activeChip) activeChip.classList.add('active');
      const search = document.getElementById('marketSearchInput')?.value || '';
      this.renderMarket(category, search);
    },

    searchMarket(query) {
      const activeChip = document.querySelector('#marketFilters .chip.active');
      const cat = activeChip ? activeChip.getAttribute('data-market-cat') : 'all';
      this.renderMarket(cat, query);
    },

    contactSeller(itemId) {
      const item = state.market.find(m => m.id === itemId);
      if (!item) return;
      alert(`Chat initiated with ${item.seller}! Coordinate the meetup at DCE Canteen or Library entrance.`);
      this.toast(`Meetup request sent to ${item.seller}!`, 'success');
    },

    // 7. Campus Daily Poll
    renderPoll() {
      const container = document.getElementById('pollOptionsContainer');
      const votesEl = document.getElementById('pollTotalVotes');
      if (!container || !state.poll) return;

      if (votesEl) votesEl.textContent = `${state.poll.totalVotes} votes`;

      container.innerHTML = state.poll.options.map(opt => {
        const pct = Math.round((opt.votes / state.poll.totalVotes) * 100);
        const isSelected = state.poll.userChoice === opt.id;

        return `
          <button class="poll-option-btn ${isSelected ? 'selected' : ''}" onclick="app.votePoll(${opt.id})">
            <div class="poll-option-bar" style="width: ${state.poll.userVoted ? pct : 0}%"></div>
            <div class="poll-option-content">
              <span>${opt.text} ${isSelected ? '✓' : ''}</span>
              <span>${state.poll.userVoted ? `${pct}%` : ''}</span>
            </div>
          </button>
        `;
      }).join('');
    },

    votePoll(optionId) {
      if (state.poll.userVoted) {
        this.toast('You have already voted in today’s DCE poll!', 'info');
        return;
      }
      const opt = state.poll.options.find(o => o.id === optionId);
      if (opt) {
        opt.votes++;
        state.poll.totalVotes++;
        state.poll.userVoted = true;
        state.poll.userChoice = optionId;
        state.user.karma += 5;
        saveState();
        this.renderPoll();
        this.updateUserStatsUI();
        this.toast('Vote recorded! +5 Campus Karma', 'success');
      }
    },

    // 8. Kindness Wall
    renderKindnessWall() {
      const container = document.getElementById('kindnessCardsContainer');
      if (!container || !state.kindness) return;

      container.innerHTML = state.kindness.map(k => `
        <div class="kindness-card">
          <p>"${k.text}"</p>
          <span class="signature">— ${k.author}</span>
        </div>
      `).join('');
    },

    submitPeerVent() {
      const input = document.getElementById('anonymousVentInput');
      if (!input || !input.value.trim()) return;

      state.kindness.unshift({
        text: input.value.trim(),
        author: 'Anonymous DCE Student'
      });
      input.value = '';
      state.user.karma += 8;
      saveState();
      this.renderKindnessWall();
      this.updateUserStatsUI();
      this.toast('Your encouraging note has been pinned to the Kindness Wall! +8 Karma', 'success');
    },

    bookWellnessSlot() {
      alert("Opening DCE Counseling Scheduler: Confidential walk-in slots available Mon-Sat at DCE Student Wellness Centre.");
      this.toast('Confidential wellness portal opened', 'info');
    },

    // 9. Notifications
    renderNotifications() {
      const list = document.getElementById('notifList');
      const badge = document.getElementById('notifBadge');
      if (!list || !state.notifications) return;

      const unreadCount = state.notifications.filter(n => n.unread).length;
      if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'flex' : 'none';
      }

      list.innerHTML = state.notifications.map(n => `
        <div class="notif-item ${n.unread ? 'unread' : ''}">
          <div class="notif-icon">${n.icon}</div>
          <div class="notif-content">
            <p>${n.text}</p>
            <div class="notif-time">${n.time}</div>
          </div>
        </div>
      `).join('');
    },

    toggleNotifPanel() {
      const panel = document.getElementById('notifPanel');
      if (panel) panel.classList.toggle('hidden');
    },

    markAllNotifsRead() {
      state.notifications.forEach(n => n.unread = false);
      saveState();
      this.renderNotifications();
      this.toast('All notifications marked as read', 'info');
    },

    // ==========================================
    // AUDIO WRAPPERS
    // ==========================================

    toggleSound(type) {
      let isPlaying = false;
      const vol = document.getElementById(type === 'rain' ? 'volRain' : (type === 'cafe' ? 'volCafe' : 'volBinaural'))?.value || 0.5;

      if (type === 'rain') isPlaying = audio.toggleRain(vol);
      if (type === 'cafe') isPlaying = audio.toggleCafe(vol);
      if (type === 'binaural') isPlaying = audio.toggleBinaural(vol);

      const btn = document.getElementById(type === 'rain' ? 'soundBtnRain' : (type === 'cafe' ? 'soundBtnCafe' : 'soundBtnBinaural'));
      if (btn) {
        btn.textContent = isPlaying ? 'Pause' : 'Play';
        btn.classList.toggle('playing', isPlaying);
      }
    },

    setSoundVolume(type, val) {
      audio.setVolume(type, val);
    },

    stopAllSounds() {
      audio.stopAll();
      ['soundBtnRain', 'soundBtnCafe', 'soundBtnBinaural'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.textContent = 'Play';
          btn.classList.remove('playing');
        }
      });
      this.toast('Muted all background ambient audio', 'info');
    },

    // ==========================================
    // POMODORO WRAPPERS
    // ==========================================

    setTimerMode(mode) { timer.setMode(mode); },
    toggleTimer() { timer.toggle(); },
    resetTimer() { timer.reset(); },


    // ==========================================
    // NOTES & LAB MANUALS LOGIC
    // ==========================================

    renderNotes() {
      const container = document.getElementById('notesGridContainer');
      if (!container) return;

      const notes = state.notes || [];
      const branch = this.activeNoteBranch;
      const year = this.activeNoteYear;
      const type = this.activeNoteType;
      const query = (this.notesSearchQuery || '').trim().toLowerCase();

      let filtered = notes.filter(n => {
        if (type !== 'all' && n.type !== type) return false;
        if (branch !== 'all' && n.branch !== branch) return false;
        if (year !== 'all' && String(n.year) !== String(year)) return false;
        if (query) {
          const matchTitle = (n.title || '').toLowerCase().includes(query);
          const matchCode = (n.subjectCode || '').toLowerCase().includes(query);
          const matchAuthor = (n.author || '').toLowerCase().includes(query);
          const matchBranch = (n.branch || '').toLowerCase().includes(query);
          const matchDesc = (n.description || '').toLowerCase().includes(query);
          const matchTopics = (n.syllabusTopics || []).some(t => t.toLowerCase().includes(query));
          if (!matchTitle && !matchCode && !matchAuthor && !matchBranch && !matchDesc && !matchTopics) {
            return false;
          }
        }
        return true;
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 48px 24px; text-align: center; background: var(--bg-card); border: 1px dashed var(--border-color); border-radius: var(--radius-lg);">
            <div style="font-size: 3rem; margin-bottom: 12px;">📚</div>
            <h3 style="margin-bottom: 8px;">No Notes Found for Selected Filters</h3>
            <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 20px auto; font-size: 0.9rem;">
              We couldn't find any resources for Branch: <strong>${branch === 'all' ? 'All' : branch}</strong>, Year: <strong>${year === 'all' ? 'All' : 'Year ' + year}</strong>, Type: <strong>${type === 'all' ? 'All' : type.toUpperCase()}</strong>.
            </p>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
              <button class="btn-secondary" onclick="app.resetNotesFilters()">Clear All Filters</button>
              <button class="btn-primary" onclick="app.openUploadNotesModal()">+ Contribute First Note (+25 Karma)</button>
            </div>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(n => {
        const typeClass = n.type || 'theory';
        const typeLabel = n.typeLabel || '📖 Notes';
        const topics = (n.syllabusTopics || []).slice(0, 4).map(t => `<span class="note-pill">${t}</span>`).join('');
        
        return `
          <div class="note-card" data-note-id="${n.id}">
            <div class="note-header-tags">
              <span class="note-branch-badge">${n.branch}</span>
              <span class="note-year-badge">Year ${n.year} • ${n.semester || 'Academic'}</span>
              <span class="note-type-tag ${typeClass}">${typeLabel}</span>
            </div>

            <h3>${n.title}</h3>
            
            <div class="note-subject-meta">
              <span>🏷️ <strong>${n.subjectCode || 'DCE-ACAD'}</strong></span>
              <span>•</span>
              <span title="DCE Verified Academic Resource">✍️ ${n.author} ${n.verified ? '<span style="color: #10b981; font-weight: bold;" title="Verified DCE Academic Standard">✓ Verified</span>' : ''}</span>
            </div>

            <div class="note-syllabus-pills">
              ${topics}
            </div>

            <div class="note-stats-row">
              <span>📄 ${n.pages} pages</span>
              <span>💾 ${n.fileSize}</span>
              <span>⬇️ <span id="downloadCount-${n.id}">${n.downloads}</span></span>
              <span>⭐ ${n.rating}</span>
            </div>

            <div class="note-card-actions">
              <button class="btn-secondary" style="padding: 7px 12px; font-size: 0.8rem;" onclick="app.previewNote('${n.id}')">
                👁️ Preview & Viva
              </button>
              <button class="btn-primary" style="padding: 7px 14px; font-size: 0.8rem;" onclick="app.downloadNote('${n.id}')">
                ⬇️ Download (${n.fileSize})
              </button>
            </div>
          </div>
        `;
      }).join('');
    },

    filterNoteType(type) {
      this.activeNoteType = type;
      document.querySelectorAll('#noteTypeFilters button').forEach(btn => {
        if (btn.getAttribute('data-note-type') === type) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      this.renderNotes();
    },

    filterNoteBranch(branch) {
      this.activeNoteBranch = branch;
      const select = document.getElementById('notesBranchSelect');
      if (select) select.value = branch;
      this.renderNotes();
    },

    filterNoteYear(year) {
      this.activeNoteYear = year;
      const select = document.getElementById('notesYearSelect');
      if (select) select.value = year;
      this.renderNotes();
    },

    searchNotes(query) {
      this.notesSearchQuery = query;
      this.renderNotes();
    },

    resetNotesFilters() {
      this.activeNoteBranch = 'all';
      this.activeNoteYear = 'all';
      this.activeNoteType = 'all';
      this.notesSearchQuery = '';

      const bSel = document.getElementById('notesBranchSelect');
      if (bSel) bSel.value = 'all';
      const ySel = document.getElementById('notesYearSelect');
      if (ySel) ySel.value = 'all';
      const sInp = document.getElementById('notesSearchInput');
      if (sInp) sInp.value = '';

      document.querySelectorAll('#noteTypeFilters button').forEach(btn => {
        if (btn.getAttribute('data-note-type') === 'all') {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      this.renderNotes();
    },

    previewNote(noteId) {
      const note = (state.notes || []).find(n => n.id === noteId);
      if (!note) return;

      const modalContent = document.getElementById('notesPreviewModalContent');
      if (!modalContent) return;

      let labExperimentsHtml = '';
      if (note.experiments && note.experiments.length > 0) {
        labExperimentsHtml = `
          <div style="margin-top: 14px;">
            <h4 style="font-size: 0.95rem; margin-bottom: 8px; color: var(--primary); display: flex; align-items: center; gap: 6px;">
              <span>🧪</span> Included Lab Experiments (${note.experiments.length})
            </h4>
            <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 12px; font-size: 0.82rem; display: flex; flex-direction: column; gap: 6px;">
              ${note.experiments.map(e => `<div>✓ ${e}</div>`).join('')}
            </div>
          </div>
        `;
      }

      let vivaQuestionsHtml = '';
      if (note.vivaQuestions && note.vivaQuestions.length > 0) {
        vivaQuestionsHtml = `
          <div style="margin-top: 14px;">
            <h4 style="font-size: 0.95rem; margin-bottom: 8px; color: #10b981; display: flex; align-items: center; gap: 6px;">
              <span>💡</span> External Examiner Viva Voce Q&A
            </h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${note.vivaQuestions.map((v, i) => `
                <div style="background: var(--bg-surface-elevated); border-left: 3px solid #10b981; border-radius: 4px; padding: 10px 14px; font-size: 0.82rem;">
                  <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">Q${i+1}: ${v.q}</strong>
                  <span style="color: var(--text-secondary);">${v.a}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      modalContent.innerHTML = `
        <div class="modal-header">
          <div>
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase; margin-bottom: 4px;">
              ${note.branch} • Year ${note.year} (${note.semester || 'Academic'}) • ${note.subjectCode}
            </div>
            <h3 style="font-size: 1.2rem; line-height: 1.3;">${note.title}</h3>
          </div>
          <button class="modal-close-btn" onclick="app.closeModal('notesPreviewModal')">✕</button>
        </div>

        <div class="notes-preview-modal-body" style="max-height: 60vh; overflow-y: auto; padding-right: 4px;">
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
            <span class="note-type-tag ${note.type}">${note.typeLabel}</span>
            <span class="note-pill">📄 ${note.pages} Pages</span>
            <span class="note-pill">💾 ${note.fileSize}</span>
            <span class="note-pill">⬇️ ${note.downloads} Downloads</span>
            <span class="note-pill">⭐ ${note.rating} Rating</span>
          </div>

          <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 12px;">
            ${note.description}
          </div>

          <div style="font-size: 0.8rem; background: var(--primary-light); color: var(--primary); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 10px; font-weight: 600;">
            ✍️ Curated & Verified by: ${note.author} (Dronacharya College of Engineering)
          </div>

          ${labExperimentsHtml}
          ${vivaQuestionsHtml}
        </div>

        <div class="modal-footer" style="margin-top: 18px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
          <button type="button" class="btn-secondary" onclick="app.closeModal('notesPreviewModal')">Close</button>
          <div style="display: flex; gap: 8px;">
            <button type="button" class="btn-secondary" onclick="app.copyNoteLink('${note.id}')">📋 Copy Link</button>
            <button type="button" class="btn-primary" onclick="app.downloadNote('${note.id}')">
              ⬇️ Download Full PDF (${note.fileSize})
            </button>
          </div>
        </div>
      `;

      this.openModal('notesPreviewModal');
    },

    copyNoteLink(noteId) {
      const dummyUrl = window.location.origin + window.location.pathname + '#notes-' + noteId;
      navigator.clipboard?.writeText(dummyUrl).then(() => {
        this.toast('📋 Resource link copied to clipboard!', 'success');
      }).catch(() => {
        this.toast('Resource URL: ' + dummyUrl, 'info');
      });
    },

    downloadNote(noteId) {
      const note = (state.notes || []).find(n => n.id === noteId);
      if (!note) return;

      note.downloads = (note.downloads || 0) + 1;
      state.user.karma = (state.user.karma || 0) + 5;
      saveState();

      // Update counter on UI if visible
      const countEl = document.getElementById(`downloadCount-${note.id}`);
      if (countEl) countEl.textContent = note.downloads;
      this.updateUserStatsUI();

      // Generate a downloadable markdown document with full curriculum & practical details
      let docContent = `# DRONACHARYA COLLEGE OF ENGINEERING (DCE)
## Academic Resource Repository - CampusPulse
------------------------------------------------------------
Subject Title: ${note.title}
Branch: ${note.branch}
Academic Year: Year ${note.year} (${note.semester || 'Curriculum'})
Course Code: ${note.subjectCode}
Resource Type: ${note.typeLabel}
Faculty / Contributor: ${note.author}
Verified Standard: DCE Academic Quality Cell (AQC)
------------------------------------------------------------

### Course Synopsis & Overview:
${note.description}

### Key Units / Syllabus Modules:
${(note.syllabusTopics || []).map((t, idx) => `${idx + 1}. ${t}`).join('\n')}
`;

      if (note.experiments && note.experiments.length > 0) {
        docContent += `\n### Laboratory Practicals & Code Experiments:\n`;
        docContent += note.experiments.map((e, idx) => `Experiment ${idx + 1}: ${e}\n   Status: Verified Compilation & Complete Algorithm`).join('\n\n');
      }

      if (note.vivaQuestions && note.vivaQuestions.length > 0) {
        docContent += `\n\n### External Examiner Viva Voce Question Bank:\n`;
        docContent += note.vivaQuestions.map((v, idx) => `Q${idx + 1}: ${v.q}\nAns: ${v.a}\n`).join('\n');
      }

      docContent += `\n\n------------------------------------------------------------
Downloaded via CampusPulse Portal | Dronacharya College of Engineering
Study smarter, collaborate with batchmates, and aim for top placement! 🎓
`;

      const blob = new Blob([docContent], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${note.subjectCode}_${note.branch}_${note.title.replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30)}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      this.toast(`📥 Downloaded "${note.title}"! +5 Study Karma earned 📚`, 'success');
    },

    openUploadNotesModal() {
      this.openModal('uploadNotesModal');
    },

    handleUploadNotes(e) {
      e.preventDefault();
      const titleInput = document.getElementById('uploadNoteTitle');
      const branchInput = document.getElementById('uploadNoteBranch');
      const yearInput = document.getElementById('uploadNoteYear');
      const typeInput = document.getElementById('uploadNoteType');
      const pagesInput = document.getElementById('uploadNotePages');
      const syllabusInput = document.getElementById('uploadNoteSyllabus');
      const descInput = document.getElementById('uploadNoteDesc');

      if (!titleInput || !branchInput || !yearInput || !typeInput) return;

      const typeVal = typeInput.value;
      const typeLabelMap = {
        'lab': '🧪 Lab Manual & Viva',
        'theory': '📖 Handwritten Notes',
        'pyq': '📄 Solved PYQ Papers',
        'cheat': '📝 Formula Cheat Sheet'
      };

      const branchVal = branchInput.value;
      const yearVal = parseInt(yearInput.value, 10) || 1;
      const topics = (syllabusInput?.value || 'Units 1-5').split(',').map(s => s.trim()).filter(Boolean);

      const newNote = {
        id: 'note-user-' + Date.now(),
        title: titleInput.value.trim(),
        branch: branchVal,
        year: yearVal,
        semester: `Year ${yearVal}`,
        type: typeVal,
        typeLabel: typeLabelMap[typeVal] || '📖 Notes',
        subjectCode: `${branchVal}-${yearVal}01`,
        author: `${state.user.name} (${branchVal} Dept)`,
        verified: true,
        pages: parseInt(pagesInput?.value, 10) || 45,
        fileSize: '3.8 MB',
        downloads: 1,
        rating: 5.0,
        description: descInput?.value.trim() || 'Comprehensive student-contributed academic notes and lab resource for DCE engineering students.',
        syllabusTopics: topics.length > 0 ? topics : ['Complete Syllabus Coverage', 'High Weightage Topics', 'Exam Oriented'],
        experiments: typeVal === 'lab' ? [
          'Exp 1: Core Practical Laboratory Implementation with Tested Source Code',
          'Exp 2: Parameter Verification, Tabulation and Graphical Analysis'
        ] : [],
        vivaQuestions: typeVal === 'lab' ? [
          { q: 'What is the primary practical objective of this laboratory?', a: 'To provide rigorous hands-on engineering implementation and troubleshooting skills.' },
          { q: 'How does this experiment correlate with industrial applications?', a: 'Forms foundational architecture for production engineering workflows and system design.' }
        ] : []
      };

      state.notes.unshift(newNote);
      state.user.karma = (state.user.karma || 0) + 25;

      state.notifications.unshift({
        id: 'n-' + Date.now(),
        text: `📄 New note "${newNote.title}" contributed by ${state.user.name} for ${branchVal} Year ${yearVal}!`,
        time: 'Just now',
        unread: true,
        icon: '📚'
      });

      saveState();

      this.closeModal('uploadNotesModal');
      const form = document.getElementById('uploadNotesForm');
      if (form) form.reset();

      this.renderNotes();
      this.renderNotifications();
      this.updateUserStatsUI();

      this.toast('🎉 Note contributed successfully! You earned +25 Contributor Karma! 🌟', 'success');
    },


    // ==========================================
    // STUDENT AUTHENTICATION LOGIC
    // ==========================================

    handleUserBadgeClick() {
      if (state.user && state.user.isLoggedIn) {
        this.openProfileModal();
      } else {
        this.openLoginModal();
      }
    },

    openLoginModal() {
      this.openModal('loginModal');
      setTimeout(() => {
        const rollInput = document.getElementById('loginRollNo');
        if (rollInput) rollInput.focus();
      }, 100);
    },

    quickFillDemoLogin(roll, mobile, branch, sem, name) {
      const rInp = document.getElementById('loginRollNo');
      const mInp = document.getElementById('loginMobile');
      const bInp = document.getElementById('loginBranch');
      const sInp = document.getElementById('loginSem');
      const nInp = document.getElementById('loginStudentName');
      if (rInp) rInp.value = roll;
      if (mInp) mInp.value = mobile;
      if (bInp) bInp.value = branch;
      if (sInp) sInp.value = sem;
      if (nInp) nInp.value = name;
      this.toast(`Pre-filled login for ${name} (Roll: ${roll})`, 'info');
    },

    handleStudentLogin(e) {
      e.preventDefault();
      const roll = (document.getElementById('loginRollNo')?.value || '').trim();
      const mobile = (document.getElementById('loginMobile')?.value || '').trim();
      const branch = document.getElementById('loginBranch')?.value || 'CSE';
      const sem = parseInt(document.getElementById('loginSem')?.value, 10) || 3;
      let name = (document.getElementById('loginStudentName')?.value || '').trim();

      if (!roll) {
        this.toast('Please enter your College Roll Number', 'alert');
        return;
      }

      if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
        this.toast('Please enter a valid 10-digit registered mobile number', 'alert');
        return;
      }

      if (!name) {
        name = `Student (${roll})`;
      }

      // Compute initials
      const parts = name.split(' ').filter(Boolean);
      let initials = 'ST';
      if (parts.length >= 2) {
        initials = (parts[0][0] + parts[1][0]).toUpperCase();
      } else if (parts.length === 1 && parts[0].length >= 2) {
        initials = parts[0].substring(0, 2).toUpperCase();
      } else {
        initials = roll.substring(0, 2).toUpperCase();
      }

      state.user = {
        ...(state.user || {}),
        isLoggedIn: true,
        rollNumber: roll,
        mobileNumber: mobile,
        name: name,
        initials: initials,
        branch: branch,
        semester: sem,
        major: `B.Tech ${branch} • Sem ${sem} • DCE`,
        id: `#DCE-${roll}`,
        karma: (state.user?.karma || 100) + 15
      };

      // Automatically personalize Time Table and Notes to student's department
      this.activeTimeTableBranch = branch;
      this.activeTimeTableSem = String(sem);
      this.activeNoteBranch = branch;

      saveState();

      this.closeModal('loginModal');
      this.updateUserStatsUI();
      this.renderTimeTable();
      this.renderNotes();

      this.toast(`🎉 Welcome! Signed in as Roll No: ${roll} (${branch})! +15 Login Karma earned`, 'success');
    },

    logoutStudent() {
      state.user = {
        isLoggedIn: false,
        rollNumber: '',
        mobileNumber: '',
        name: 'Student',
        initials: 'DCE',
        major: 'Dronacharya College of Engineering',
        branch: 'CSE',
        semester: 3,
        id: '',
        groupsCount: 0,
        karma: 100,
        focusMins: 0,
        joinedGroups: [],
        upvotedPosts: []
      };

      saveState();
      this.closeModal('profileModal');
      this.updateUserStatsUI();
      this.toast('Logged out successfully. Browsing as Guest.', 'info');
    },

    // ==========================================
    // MODAL HANDLERS
    // ==========================================

    openModal(modalId) {
      const m = document.getElementById(modalId);
      if (m && typeof m.showModal === 'function') {
        m.showModal();
      }
    },

    closeModal(modalId) {
      const m = document.getElementById(modalId);
      if (m && typeof m.close === 'function') {
        m.close();
      }
    },

    openNewGroupModal() { this.openModal('newGroupModal'); },
    openNewPostModal() { this.openModal('newPostModal'); },
    openNewListingModal() { this.openModal('newListingModal'); },
    openSafeWalkModal() { this.openModal('safeWalkModal'); },
    openProfileModal() { this.openModal('profileModal'); },

    handleCreateGroup(e) {
      e.preventDefault();
      const course = document.getElementById('groupCourseInput')?.value.trim();
      const title = document.getElementById('groupTitleInput')?.value.trim();
      const meetTime = document.getElementById('groupMeetTime')?.value.trim();
      const location = document.getElementById('groupLocation')?.value.trim();
      const category = document.getElementById('groupCategory')?.value;
      const maxSeats = parseInt(document.getElementById('groupMaxSeats')?.value, 10) || 6;
      const desc = document.getElementById('groupDesc')?.value.trim() || 'Peer collaboration sprint.';

      if (!course || !title || !meetTime || !location) return;

      const newGroup = {
        id: 'g_' + Date.now(),
        course,
        title,
        host: state.user.name,
        category,
        meetTime,
        location,
        maxSeats,
        attendees: [state.user.initials],
        desc
      };

      state.groups.unshift(newGroup);
      state.user.joinedGroups.push(newGroup.id);
      state.user.karma += 20;
      saveState();

      this.closeModal('newGroupModal');
      document.getElementById('newGroupForm')?.reset();
      this.renderStudyGroups();
      this.updateUserStatsUI();
      this.toast(`Study circle "${course}" published at DCE! +20 Karma`, 'success');
    },

    handleCreatePost(e) {
      e.preventDefault();
      const category = document.getElementById('postCategory')?.value || 'food';
      const title = document.getElementById('postTitle')?.value.trim();
      const location = document.getElementById('postLocation')?.value.trim();
      const content = document.getElementById('postContent')?.value.trim() || '';

      if (!title || !location) return;

      let badge = '📢 Campus Update';
      if (category === 'food') badge = '🍕 Free Food Alert';
      if (category === 'lost') badge = '🔍 Lost & Found';
      if (category === 'rides') badge = '🚖 Cab Share';
      if (category === 'academic') badge = '📚 Academic / Hackathon';
      if (category === 'social') badge = '🎉 DCE Fest';

      const newPost = {
        id: 'f_' + Date.now(),
        category,
        badge,
        author: state.user.name,
        authorAvatar: state.user.initials,
        role: state.user.major,
        timeAgo: 'Just now',
        title,
        location,
        content,
        upvotes: 1,
        commentsCount: 0,
        isFood: category === 'food'
      };

      state.feed.unshift(newPost);
      state.user.karma += 15;
      saveState();

      this.closeModal('newPostModal');
      document.getElementById('newPostForm')?.reset();
      this.renderFeed();
      this.updateUserStatsUI();
      this.toast('Broadcast published to DCE live stream! +15 Karma', 'success');
    },

    handleCreateListing(e) {
      e.preventDefault();
      const type = document.getElementById('listingType')?.value || 'skills';
      const price = document.getElementById('listingPrice')?.value.trim();
      const title = document.getElementById('listingTitle')?.value.trim();
      const desc = document.getElementById('listingDesc')?.value.trim() || '';

      if (!title || !price) return;

      const newListing = {
        id: 'm_' + Date.now(),
        type,
        title,
        price,
        seller: state.user.name,
        sellerAvatar: state.user.initials,
        timeAgo: 'Just now',
        desc
      };

      state.market.unshift(newListing);
      state.user.karma += 10;
      saveState();

      this.closeModal('newListingModal');
      document.getElementById('newListingForm')?.reset();
      this.renderMarket();
      this.updateUserStatsUI();
      this.toast('Listing published on DCE Bazaar! +10 Karma', 'success');
    },

    handleSafeWalkDispatch(e) {
      e.preventDefault();
      const loc = document.getElementById('safeWalkCurrentLoc')?.value;

      this.closeModal('safeWalkModal');
      this.toast(`🚨 DCE Suraksha Night Escort Dispatched to ${loc}! Officer R. Singh (Badge #204) en route. ETA 3 minutes.`, 'alert');

      state.notifications.unshift({
        id: 'n_' + Date.now(),
        text: `🛡️ Suraksha Escort en route to ${loc} (DCE Officer R. Singh).`,
        time: 'Just now',
        unread: true,
        icon: '🚨'
      });
      saveState();
      this.renderNotifications();
    },

    saveProfilePreferences() {
      this.closeModal('profileModal');
      this.toast('Preferences saved successfully!', 'success');
    },

    resetDemoData() {
      if (confirm('Reset DCE CampusPulse back to default demo state?')) {
        localStorage.removeItem('dce_campuspulse_v6');
        loadState();
        this.renderAll();
        this.closeModal('profileModal');
        this.toast('Reset to default DCE campus state.', 'info');
      }
    },

    // ==========================================
    // COMMAND PALETTE (CTRL + K)
    // ==========================================

    setupCommandPalette() {
      const palette = document.getElementById('cmdPaletteModal');
      const input = document.getElementById('paletteSearchInput');
      const resultsContainer = document.getElementById('paletteResults');

      window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          this.openCommandPalette();
        }
      });

      if (input) {
        input.addEventListener('input', () => {
          this.renderPaletteResults(input.value.trim());
        });

        input.addEventListener('keydown', (e) => {
          const items = resultsContainer.querySelectorAll('.palette-item');
          let currentSelected = resultsContainer.querySelector('.palette-item.selected');
          let index = Array.from(items).indexOf(currentSelected);

          if (e.key === 'ArrowDown') {
            e.preventDefault();
            index = (index + 1) % items.length;
            items.forEach(i => i.classList.remove('selected'));
            items[index]?.classList.add('selected');
            items[index]?.scrollIntoView({ block: 'nearest' });
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            index = (index - 1 + items.length) % items.length;
            items.forEach(i => i.classList.remove('selected'));
            items[index]?.classList.add('selected');
            items[index]?.scrollIntoView({ block: 'nearest' });
          } else if (e.key === 'Enter') {
            e.preventDefault();
            currentSelected?.click();
          }
        });
      }
    },

    openCommandPalette() {
      const palette = document.getElementById('cmdPaletteModal');
      const input = document.getElementById('paletteSearchInput');
      if (palette) {
        palette.showModal();
        if (input) {
          input.value = '';
          input.focus();
          this.renderPaletteResults('');
        }
      }
    },

    renderPaletteResults(query) {
      const resultsContainer = document.getElementById('paletteResults');
      if (!resultsContainer) return;

      const actions = [
        { title: 'DCE Radar: Silent Reading Halls & Lab Occupancy', subtitle: 'View DCE Library seats & Aryabhata PC lab', icon: '⚡', action: () => this.showSection('radar') },
        { title: 'Peer Study Circles: GATE CSE, SDE & M-3', subtitle: 'Join or create exam cram groups', icon: '👥', action: () => this.showSection('groups') },
        { title: 'Canteen & Cafe: Live Menus & Wait Times', subtitle: 'Masala Dosa, Rajma Chawal, Biryani, Maggi (₹)', icon: '🍛', action: () => this.showSection('dining') },
        { title: 'Campus Map: Sharma Xerox, Maggi Point & RO Water', subtitle: 'DCE essential amenities & directions', icon: '🗺️', action: () => this.showSection('map') },
        { title: 'Live Stream: Free Food Drops & Cab Shares', subtitle: 'Real-time DCE student bulletin', icon: '📢', action: () => this.showSection('feed') },
        { title: 'Student Bazaar: Casio 991EX, Drafter & B.S. Grewal', subtitle: 'Peer trade engineering gear & skill barter', icon: '🔄', action: () => this.showSection('market') },
        { title: 'Notes & Labs: Every Branch, Year & Viva Q&A', subtitle: 'Handwritten notes, lab manuals, and 5-yr solved papers', icon: '📚', action: () => this.showSection('notes') },
        { title: 'Time Table: Live Lectures, Labs & Room Numbers', subtitle: 'View daily routine, teachers, and cabin numbers', icon: '📅', action: () => this.showSection('timetable') },
        { title: 'Student Login (Roll No & Mobile Number)', subtitle: 'Authenticate with DCE college roll number and phone', icon: '🔑', action: () => this.openLoginModal() },
        { title: 'Student Profile & Academic Credentials', subtitle: 'View verified roll number, karma and attendance', icon: '👤', action: () => this.openProfileModal() },
        { title: 'About Us: DCE History, Vision, Accreditations & Campus', subtitle: 'AICTE approved, NAAC accredited, 26+ years of excellence', icon: '🏛️', action: () => this.showSection('about') },
        { title: 'Focus Lounge: 25m Pomodoro & Chai Rain Audio', subtitle: 'Vedic focus audio and study timer', icon: '🎧', action: () => this.showSection('focus') },
        { title: 'DCE Suraksha Night Escort SOS Dispatch', subtitle: 'Request immediate security walk-home', icon: '🚨', action: () => this.openSafeWalkModal() },
        { title: 'Toggle Light / Dark Theme', subtitle: 'Switch color appearance', icon: '🌓', action: () => this.toggleTheme() }
      ];

      const dynamicItems = [];
      state.spots.forEach(s => {
        dynamicItems.push({
          title: `Spot: ${s.name}`,
          subtitle: `${s.building} • ${s.occupancy}% Occupied • ${s.seatsAvailable} seats open`,
          icon: '🏢',
          action: () => { this.showSection('radar'); this.openSpotDetail(s.id); }
        });
      });

      state.dining.forEach(d => {
        dynamicItems.push({
          title: `Food: ${d.name} (${d.price})`,
          subtitle: `${d.location} • ${d.diets.join(', ')}`,
          icon: '🍲',
          action: () => { this.showSection('dining'); }
        });
      });

      (state.notes || []).forEach(n => {
        dynamicItems.push({
          title: `Notes: ${n.title}`,
          subtitle: `${n.branch} Year ${n.year} • ${n.typeLabel} • ${n.pages} pages`,
          icon: '📚',
          action: () => { this.showSection('notes'); this.previewNote(n.id); }
        });
      });

      const all = [...actions, ...dynamicItems];
      let filtered = all;
      if (query) {
        const q = query.toLowerCase();
        filtered = all.filter(item => item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q));
      }

      if (filtered.length === 0) {
        resultsContainer.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted);">No matching resources found for "${query}"</div>`;
        return;
      }

      resultsContainer.innerHTML = filtered.slice(0, 8).map((item, idx) => `
        <div class="palette-item ${idx === 0 ? 'selected' : ''}" data-idx="${idx}">
          <span class="palette-item-icon">${item.icon}</span>
          <div class="palette-item-text">
            <span class="palette-item-title">${item.title}</span>
            <span class="palette-item-subtitle">${item.subtitle}</span>
          </div>
        </div>
      `).join('');

      resultsContainer.querySelectorAll('.palette-item').forEach((el, idx) => {
        el.addEventListener('click', () => {
          this.closeModal('cmdPaletteModal');
          filtered[idx]?.action();
        });
      });
    },

    // ==========================================
    // TOAST NOTIFICATION SYSTEM
    // ==========================================

    toast(msg, type = 'info') {
      const container = document.getElementById('toastContainer');
      if (!container) return;

      const toastEl = document.createElement('div');
      toastEl.className = `toast ${type}`;
      toastEl.innerHTML = `
        <span>${type === 'success' ? '✓' : (type === 'alert' ? '⚠️' : 'ℹ️')}</span>
        <span>${msg}</span>
      `;
      container.appendChild(toastEl);

      setTimeout(() => {
        toastEl.style.opacity = '0';
        toastEl.style.transform = 'translateY(12px)';
        toastEl.style.transition = 'all 0.3s ease';
        setTimeout(() => toastEl.remove(), 300);
      }, 3500);
    },

    // ==========================================
    // REAL-TIME CAMPUS SIMULATION
    // ==========================================

    startLiveSimulation() {
      setInterval(() => {
        state.spots.forEach(spot => {
          const delta = Math.floor(Math.random() * 5) - 2;
          spot.occupancy = Math.max(14, Math.min(95, spot.occupancy + delta));
          spot.seatsAvailable = Math.max(2, Math.round(spot.capacity * (1 - spot.occupancy / 100)));
        });

        const avg = Math.round(state.spots.reduce((acc, s) => acc + s.occupancy, 0) / state.spots.length);
        const headerAct = document.getElementById('headerLiveActivity');
        if (headerAct) headerAct.textContent = `${avg}% Campus Active`;

        if (this.activeSection === 'radar') {
          const activeChip = document.querySelector('#radarFilters .chip.active');
          const cat = activeChip ? activeChip.getAttribute('data-filter') : 'all';
          this.renderRadarSpots(cat);
        }
      }, 18000);
    },

    setupEventListeners() {
      document.addEventListener('click', (e) => {
        const notifPanel = document.getElementById('notifPanel');
        const notifBtn = document.getElementById('notifBellBtn');
        if (notifPanel && !notifPanel.classList.contains('hidden')) {
          if (!notifPanel.contains(e.target) && !notifBtn.contains(e.target)) {
            notifPanel.classList.add('hidden');
          }
        }
      });
    }
  };

  window.app = app;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
  } else {
    app.init();
  }

})();
