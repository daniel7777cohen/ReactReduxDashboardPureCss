const summaryLog = {
  total: 13000,
  approved: 126560,
  declined: 10143,
  approvalRate: 78,
};

const transactions = [
  {
    date: 1581866773374,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "978228",
    amount: 1128,
    currency: "$",
    transactionId: "be45401c-943b-4ef3-9140-a12e7585845d",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "921288",
    amount: 154,
    currency: "$",
    transactionId: "746bddc4-2aa9-4f6c-80f4-faf50220630f",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "amex",
    binNumber: "327345",
    amount: 845,
    currency: "$",
    transactionId: "ac1bf6f8-e829-46b8-9386-77bd66140acb",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "432359",
    amount: 1034,
    currency: "$",
    transactionId: "34a05dcf-4ff5-4afd-956d-1a40a700cb6d",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "665313",
    amount: 243,
    currency: "$",
    transactionId: "ef33fda6-78dc-45be-a5de-ea95f3c6d861",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "949988",
    amount: 848,
    currency: "$",
    transactionId: "e43cc7cc-c435-44cd-b469-1a1a664c9671",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "543435",
    amount: 467,
    currency: "$",
    transactionId: "ff701dfe-1397-415b-a7dd-0418993a5264",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "953829",
    amount: 927,
    currency: "$",
    transactionId: "714bc5c0-8a13-4ce9-9ad3-c9e679ad591f",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "583245",
    amount: 517,
    currency: "$",
    transactionId: "cfbb0306-4b29-483a-9ad5-af68be066c6d",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "amex",
    binNumber: "335375",
    amount: 556,
    currency: "$",
    transactionId: "248372e1-9176-451f-8236-cb971a60e18a",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "913352",
    amount: 147,
    currency: "$",
    transactionId: "f804a130-7507-428b-ac4a-3d7fad52e2f8",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "376119",
    amount: 1017,
    currency: "$",
    transactionId: "4629a207-a664-4e72-9512-b354765fc3c4",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "249163",
    amount: 667,
    currency: "$",
    transactionId: "70a5f0b5-0940-4880-8b0c-2606cc81cdfd",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "amex",
    binNumber: "333216",
    amount: 1169,
    currency: "$",
    transactionId: "3c8f6ff5-34dd-4c9e-83e1-f3e01dccaddc",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "946538",
    amount: 476,
    currency: "$",
    transactionId: "3a1f3f12-87b5-46d5-bbd3-e7b49c33a7cd",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "975262",
    amount: 1048,
    currency: "$",
    transactionId: "d9bc07db-2bb6-4e49-9cc0-572736b47e30",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "748933",
    amount: 170,
    currency: "$",
    transactionId: "94763977-5a3e-4731-81c1-bf0e9f1d6fc1",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "995427",
    amount: 754,
    currency: "$",
    transactionId: "ab95fef7-d149-4858-b4c6-8173f79add80",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "644323",
    amount: 877,
    currency: "$",
    transactionId: "c2b3bbc3-9524-4f38-91ee-71edc89eb451",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "536816",
    amount: 1002,
    currency: "$",
    transactionId: "c47ee10b-1d5a-411c-865e-5b1f61dea066",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "947992",
    amount: 845,
    currency: "$",
    transactionId: "a0c01d38-8f11-41a0-a047-cf16a47cd810",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "493329",
    amount: 718,
    currency: "$",
    transactionId: "e30b0aba-9a0d-4f67-a2fb-0743f63349eb",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "431468",
    amount: 1115,
    currency: "$",
    transactionId: "25186188-154e-425d-8720-e55474666c1f",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "767953",
    amount: 235,
    currency: "$",
    transactionId: "f3a6de3a-c5d2-45b2-a79f-98aafa750410",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "diners",
    binNumber: "797558",
    amount: 1072,
    currency: "$",
    transactionId: "2858bd16-bc24-4f9e-9bd5-bfe798211f01",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "766822",
    amount: 905,
    currency: "$",
    transactionId: "476219df-7a89-42a0-90f1-36cfecca8b2d",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "287758",
    amount: 907,
    currency: "$",
    transactionId: "0c1249fb-1b65-4fa2-80f5-3edd6a481606",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "969817",
    amount: 1188,
    currency: "$",
    transactionId: "6dd355b0-1450-41d7-b73f-b501c0dde9b8",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "813661",
    amount: 523,
    currency: "$",
    transactionId: "82d7739d-bae9-43f6-af1c-6d92afab2b9e",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "958391",
    amount: 1087,
    currency: "$",
    transactionId: "cf76889d-0473-4e22-893d-9dd2e25fa9ac",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "616673",
    amount: 1016,
    currency: "$",
    transactionId: "b3516197-d6dc-4e9f-8136-e0b29ee94dfc",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "359581",
    amount: 796,
    currency: "$",
    transactionId: "4137d63e-e042-4d7a-8109-f9946b7c8c1a",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "351617",
    amount: 335,
    currency: "$",
    transactionId: "0dffa721-2c2d-4dfc-b434-10c6131e345e",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "646766",
    amount: 345,
    currency: "$",
    transactionId: "cabb3cf4-a711-4e07-a52d-889647835e4c",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "amex",
    binNumber: "196548",
    amount: 625,
    currency: "$",
    transactionId: "2839247c-5581-464d-bb00-d8da944f3a29",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "969745",
    amount: 752,
    currency: "$",
    transactionId: "8e340be3-83b0-40c2-83bc-a8258a486a6d",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "479564",
    amount: 753,
    currency: "$",
    transactionId: "8bd6614b-f8c6-4672-bbc0-d455eae03d9d",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "935122",
    amount: 889,
    currency: "$",
    transactionId: "7fcc9223-325d-4d5a-a4f5-a70890ad2e22",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "247422",
    amount: 131,
    currency: "$",
    transactionId: "c200c166-79cd-445a-aed7-77e95df11671",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "348893",
    amount: 677,
    currency: "$",
    transactionId: "7a700f6f-1780-4b0d-91f6-75d2390a6b4e",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "744583",
    amount: 171,
    currency: "$",
    transactionId: "2e6fec7b-4aa9-4c09-b29a-8206f8446ea9",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "613457",
    amount: 1057,
    currency: "$",
    transactionId: "9a02895b-02a6-44c7-90f4-acbf787babce",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "813443",
    amount: 1032,
    currency: "$",
    transactionId: "7963d6e2-849f-4f1f-a6db-db7f8478e915",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "827765",
    amount: 473,
    currency: "$",
    transactionId: "4ef79b9a-2c97-407a-8325-3cda16c83630",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "663379",
    amount: 1009,
    currency: "$",
    transactionId: "e4b2f8fc-b668-4382-8551-9d7c8f656df7",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "856761",
    amount: 1149,
    currency: "$",
    transactionId: "bcfd80bb-cc0f-4595-9d79-bcf85934053f",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "diners",
    binNumber: "941582",
    amount: 676,
    currency: "$",
    transactionId: "4a25d5f1-235b-4c67-a81e-d1f003207bc6",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "893297",
    amount: 998,
    currency: "$",
    transactionId: "4d3e197c-d16c-46ac-baaa-92d4f4d55884",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "893297",
    amount: 998,
    currency: "$",
    transactionId: "4d3e197c-d16c-46ac-baaa-92d4f4d55882",
    decision: "Reviewd",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "893297",
    amount: 998,
    currency: "$",
    transactionId: "4d3e197c-d16c-46ac-baaa-92d4f4d55882",
    decision: "Processing",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "999555",
    amount: 1157,
    currency: "$",
    transactionId: "3c9236e1-0af3-4897-b4bc-2520e4b4232e",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "diners",
    binNumber: "122962",
    amount: 548,
    currency: "$",
    transactionId: "0b4b56e9-7b99-477a-9de9-88411a821936",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "699394",
    amount: 1195,
    currency: "$",
    transactionId: "75c31f6a-eb2d-4d93-9e49-7be28b1b3628",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "592548",
    amount: 1179,
    currency: "$",
    transactionId: "49a4dd1c-c897-4546-8181-5b28d7addff9",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "755681",
    amount: 1090,
    currency: "$",
    transactionId: "1e1c61cb-e682-4ebc-bb3d-8b429795c85d",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "988681",
    amount: 406,
    currency: "$",
    transactionId: "ad1379f1-9a0d-4194-bef4-4abaec3d78a8",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "865286",
    amount: 587,
    currency: "$",
    transactionId: "fed525b7-87ad-4acf-8b4c-c9997d708779",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "diners",
    binNumber: "971777",
    amount: 611,
    currency: "$",
    transactionId: "7e276db7-4781-4801-86fb-67e16643596a",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "293772",
    amount: 99,
    currency: "$",
    transactionId: "2d060e29-22e8-4825-92f5-d4be375fda0e",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "413279",
    amount: 1060,
    currency: "$",
    transactionId: "3df79dc4-fe7c-4832-9544-e5d2a987fd0e",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "499324",
    amount: 1060,
    currency: "$",
    transactionId: "7db8a4a6-fdbf-4cf0-b7f8-753aba0aea98",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "872288",
    amount: 602,
    currency: "$",
    transactionId: "91532c07-1e40-46ef-aa46-f8e97491ff51",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "226179",
    amount: 506,
    currency: "$",
    transactionId: "e62f3193-2354-4f78-a14b-fdd5115c6653",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "624371",
    amount: 357,
    currency: "$",
    transactionId: "d8f7df61-981d-410f-b42e-c75d266929c5",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "648312",
    amount: 239,
    currency: "$",
    transactionId: "153c47bf-3af5-49e2-b679-525e1a81cf26",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "556159",
    amount: 200,
    currency: "$",
    transactionId: "844abd69-58f9-4aa5-96e0-51b29bba9b76",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "diners",
    binNumber: "123142",
    amount: 488,
    currency: "$",
    transactionId: "b83e285b-6803-4e90-a6ba-8b113ed68a3f",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "751276",
    amount: 210,
    currency: "$",
    transactionId: "7e054d16-f4aa-42e8-b43f-54d19c7e20e9",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "964165",
    amount: 477,
    currency: "$",
    transactionId: "9ff1f4bc-d5fe-4e24-aae2-1ce4ecffeff3",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "762848",
    amount: 381,
    currency: "$",
    transactionId: "b9760b15-11cb-482c-aacd-e4410d737806",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "818121",
    amount: 359,
    currency: "$",
    transactionId: "f0d73535-0469-4617-833a-40b0e4b478cc",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "diners",
    binNumber: "752679",
    amount: 563,
    currency: "$",
    transactionId: "a0be3289-8a7f-4dc3-b84e-870ddee9c464",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "599254",
    amount: 806,
    currency: "$",
    transactionId: "cddc95cd-3828-43ea-bf95-b849b71cf71a",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "287291",
    amount: 716,
    currency: "$",
    transactionId: "eba38d8c-c0f6-40ab-8a96-f6c993bd022b",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "788575",
    amount: 169,
    currency: "$",
    transactionId: "45652f1d-61f3-4b3d-baba-9f8709de53cb",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "643283",
    amount: 389,
    currency: "$",
    transactionId: "07a7326f-f351-406a-8937-242f0e11e2c8",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "amex",
    binNumber: "486563",
    amount: 870,
    currency: "$",
    transactionId: "d9bb3886-42ce-4e55-9da2-1f9d305df962",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "426784",
    amount: 760,
    currency: "$",
    transactionId: "c49c338c-9499-4c22-90ba-1d8e888203a3",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "756643",
    amount: 615,
    currency: "$",
    transactionId: "59c4adeb-849f-4f41-817d-34f888e3fe23",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "797335",
    amount: 300,
    currency: "$",
    transactionId: "2ce55995-200b-4c64-85b3-7dd779fe3224",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "129553",
    amount: 1185,
    currency: "$",
    transactionId: "f9ec97c8-41a8-4c91-b1e7-af4fc954f710",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "475422",
    amount: 134,
    currency: "$",
    transactionId: "8b2438ef-74b1-41ad-b188-557fce10403d",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "493851",
    amount: 145,
    currency: "$",
    transactionId: "79a2a207-195e-4b21-b87a-82b40d4cc7a9",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "828821",
    amount: 1059,
    currency: "$",
    transactionId: "9b843955-7c87-43ed-960a-ccdedbdc20aa",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "amex",
    binNumber: "792596",
    amount: 150,
    currency: "$",
    transactionId: "6aff5f54-cbd3-4a22-9f80-bc319497983d",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "626673",
    amount: 1016,
    currency: "$",
    transactionId: "090de135-859a-44cd-8d3a-820e2129df26",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "mastercard",
    binNumber: "558634",
    amount: 1188,
    currency: "$",
    transactionId: "437cdbdd-4bf5-4fe8-822f-d868342869fb",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "diners",
    binNumber: "387148",
    amount: 502,
    currency: "$",
    transactionId: "5dd4ddaa-5b1d-43d0-a860-8980c67ad4f9",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "539425",
    amount: 759,
    currency: "$",
    transactionId: "5ffe52db-3795-4f56-94ef-76ae92a3bd1c",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "531691",
    amount: 719,
    currency: "$",
    transactionId: "86963c2a-10d4-497c-a4c2-3cb288ff99c0",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "amex",
    binNumber: "524875",
    amount: 848,
    currency: "$",
    transactionId: "60c8febf-764b-445f-80c3-65c670a7f67b",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "592269",
    amount: 978,
    currency: "$",
    transactionId: "2fad5450-e814-4801-b25c-ee8244a26390",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "166558",
    amount: 951,
    currency: "$",
    transactionId: "97db95ad-3d6c-43c6-9789-8bab4408b6ff",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "948718",
    amount: 625,
    currency: "$",
    transactionId: "5711656b-7b8a-4cb9-b3d0-f1aec182a60e",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "amex",
    binNumber: "753357",
    amount: 710,
    currency: "$",
    transactionId: "811ba38a-51f3-4d4d-81ec-6a62d91c62eb",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "diners",
    binNumber: "575193",
    amount: 560,
    currency: "$",
    transactionId: "16a37081-d62a-4db6-801a-1886443e50cd",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "118384",
    amount: 313,
    currency: "$",
    transactionId: "124905b7-4f4c-488d-b6ff-a960e8b4f878",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "visa",
    binNumber: "459413",
    amount: 741,
    currency: "$",
    transactionId: "0df59322-36dd-4f7a-bef6-4f3558330f8b",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "mastercard",
    binNumber: "799664",
    amount: 607,
    currency: "$",
    transactionId: "7f7f814f-2e66-4e75-9c07-1b30654af28c",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "M",
    payment: "diners",
    binNumber: "763173",
    amount: 1037,
    currency: "$",
    transactionId: "ccfd828a-8185-4c1e-9ff1-7a44bbc0cd6d",
    decision: "Declined",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "diners",
    binNumber: "682619",
    amount: 324,
    currency: "$",
    transactionId: "27395875-19e6-4b48-868b-8a12e85a37a2",
    decision: "Approved",
  },
  {
    date: 1581866773375,
    firstName: "Aurelia",
    lastName: "Perrella",
    device: "D",
    payment: "visa",
    binNumber: "512138",
    amount: 137,
    currency: "$",
    transactionId: "4637d26b-e251-4f29-b109-0987f05acc40",
    decision: "Approved",
  },
];

module.exports = { transactions, summaryLog };
