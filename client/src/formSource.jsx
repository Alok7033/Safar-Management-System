export const userInputs = [
    {
        id: 1,
        label: "Username",
        type: "text",
        placeholder: "bri sa",
    },

    {
        id: 2,
        label: "Name and Surname",
        type: "text",
        placeholder: "Enter Name",
        required: true,
        pattern: "^[A-Za-z ]+$",
        title: "Please enter letters only (no numbers or special characters)",
    },

    {
        id: 3,
        label:"Email",
        type: "email",
        placeholder: "Enter mail",
        required: true,
    },

    {
        id: 4,
        label: "Phone",
        type: "tel",
        placeholder: "Enter Phone Number",
        pattern: "^[0-9]{7,15}$", // ✔ Only digits, 7 to 15 long
        title: "Please enter a valid phone number (7–15 digits, numbers only)",
        required: true,
    },

    {
        id: 5,
        label: "Password",
        type: "password",
        placeholder: "Enter Password",
        required: true,
    },

    {
        id: 6,
        label: "Address",
        type:"text",
        placeholder: "Enter Address",
    },

    {
        id: 7,
        label: "Country",
        type: "text",
        placeholder: "Enter Country",
    },
];

export const productInputs = [
    {
        id: 1,
        label: "Title",
        type: "text",
        placeholder: "bike name",
        required: true,
    },

     {
        id: 2 ,
        label: "Description",
        type: "text",
        placeholder: "Description",
    },

     {
        id: 3 ,
        label: "Category",
        type: "text",
        placeholder: "bike category",
    },

     {
        id: 4,
        label: "Price",
        type: "number",
        placeholder: "2000",
        required: true,
    },

     {
        id: 5,
        label: "Stock",
        type: "text",
        placeholder: "in stock",
        required: true,
    },

];