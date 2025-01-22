export const registerFormControls=[
    {
        name : 'userName',
        label : 'User Name',
        placeholder : 'Enter your user name',
        componentType : 'input',
        type : 'text',

    },
    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email',

    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your Password',
        componentType : 'input',
        type : 'password',

    },
];

export const loginFormControls=[
    
    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email',

    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your Password',
        componentType : 'input',
        type : 'password',

    },
];

export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "tops", label: "Tops & T-Shirts" },
        { id: "dresses", label: "Dresses & Jumpsuits" },
        { id: "bottom-wear", label: "Bottom Wear" },
        { id: "ethnic-wear", label: "Ethnic Wear" },
        { id: "lingerie", label: "Lingerie & Innerwear" },
        { id: "active-sportswear", label: "Active & Sportswear" },
        { id: "festive-wear", label: "Festive & Traditional Wear" },
      ],
    },
    {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: [
        { id: "nike", label: "Nike" },
        { id: "adidas", label: "Adidas" },
        { id: "puma", label: "Puma" },
        { id: "levi", label: "Levi's" },
        { id: "zara", label: "Zara" },
        { id: "h&m", label: "H&M" },
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];

  
  export const shoppingViewHeaderMenuItems = [
    {
      id: "home",
      label: "Home",
      path: "/shop/home",
    },{
      id: "products",
      label: "Products",
      path: "/shop/listing",
    },
    {
      id: "tops",
      label: "Tops",
      path: "/shop/listing",
    },
    {
      id: "dresses",
      label: "Dresses",
      path: "/shop/listing",
    },
    {
      id: "bottom-wear",
      label: "Bottom-wear",
      path: "/shop/listing",
    },
    {
      id: "ethnic-wear",
      label: "Ethnic-wear",
      path: "/shop/listing",
    },
    {
      id: "lingerie",
      label: "Lingerie",
      path: "/shop/listing",
    },
    {
      id: "active-sportswear",
      label: "Active-sportswear",
      path: "/shop/listing",
    },
    {
      id: "festive-wear",
      label: "Festive-wear",
      path: "/shop/listing",
    },
    {
      id: "search",
      label: "Search",
      path: "/shop/search",
    },
  ];
  export const categoryOptionsMap = {
      "tops": "Tops" ,
      "dresses": "Dresses" ,
      "bottom-wear": "Bottom-Wear" ,
      "ethnic-wear": "Ethnic-Wear" ,
      "lingerie": "Lingerie" ,
      "active-sportswear": "Active-Sportswear" ,
      "festive-wear": "Festive-Wear" ,
  };
  
export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};
export const filterOptions = {
  category: [
    { id: "tops", label: "Tops & T-Shirts" },
    { id: "dresses", label: "Dresses & Jumpsuits" },
    { id: "bottom-wear", label: "Bottom Wear" },
    { id: "ethnic-wear", label: "Ethnic Wear" },
    { id: "lingerie", label: "Lingerie & Innerwear" },
    { id: "active-sportswear", label: "Active & Sportswear" },
    { id: "festive-wear", label: "Festive & Traditional Wear" },
],
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];