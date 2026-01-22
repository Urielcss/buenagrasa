//imagesbycolor sirve para actualizar las imagenes respecto a su color
export const sneakersData = [
    {
        id: 1,
        name: "Vans Old Skool Classic",
        model: "VN000D3H",
        price: 1699,
        description: "El clásico de skate con la banda lateral sidestripe. Durabilidad y estilo.",
        sizes: ["25", "26", "27", "28", "29"],
        colors: ["Negro", "Azul"],
        category: "Skate",
        brand: "Vans",
        gender: "Unisex",
        image: "https://vansmx.vtexassets.com/arquivos/ids/3031923",
        imagesByColor: {
            "Negro": "https://vansmx.vtexassets.com/arquivos/ids/3031923",
            "Azul": "https://vansmx.vtexassets.com/arquivos/ids/3029932"
        }
    },
    {
        id: 2,
        name: "Converse Chuck Taylor All Star Hi",
        model: "M9160",
        price: 1999,
        description: "El sneaker más icónico del mundo, reconocido por su silueta inconfundible.",
        sizes: ["24", "25", "26", "27", "28", "29"],
        colors: ["Blanco", "Negro"],
        category: "Casual",
        brand: "Converse",
        gender: "Unisex",
        image: "https://converse.com.mx/media/catalog/product/c/h/chuck-taylor-move-ivory-plataforma-lona-dama-blanco-568498c-2_hzs950jzvl9ymhsf.jpg",
        imagesByColor:{
            "Blanco":"https://converse.com.mx/media/catalog/product/c/h/chuck-taylor-move-ivory-plataforma-lona-dama-blanco-568498c-2_hzs950jzvl9ymhsf.jpg",
             "Negro":"https://converse.com.mx/media/catalog/product/c/o/converse-chuck-70-en-bota-de-lona-unisex-negro-162050c-4_thbyyr6x2spu4dg7.jpg",

        }
    },
    {
        id: 3,
        name: "Tenis Jordan Spizike Low",
        model: "IH1782-200",
        price: 3799,
        description: "Tenis Jordan Spizike Low. Los colores originales del producto pueden variar al de la imagen por cuestiones de resolución, brillo y/o luces.",
        sizes: ["6", "6.5", "7", "7.5", "8", "8.5"],
        colors: [],
        category: "Lifestyle",
        brand: "Jordan",
        gender: "Hombre",
        image: "https://www.innvictus.com/medias/1200Wx1200H-NEW-media-gallery-000000000000391051-06-20251107121212.jpg?context=bWFzdGVyfGltYWdlc3wxMDI1MDJ8aW1hZ2UvanBlZ3xhR1UyTDJoaE9DOHhOVFl6T0RZNE5UZzBNelE0Tmk4eE1qQXdWM2d4TWpBd1NGOU9SVmRmYldWa2FXRmZaMkZzYkdWeWVWOHdNREF3TURBd01EQXdNREF6T1RFd05URmZNRFpmTWpBeU5URXhNRGN4TWpFeU1USXVhbkJufGU1OTYwMDQwYzkzMTViMTRjMWFiNzk5ZWE3M2U5OTczNjJjY2U1MzM0NDJmYjllY2E4NWFkNDg0ZGQxNDBjMjQ",
        imagesByColor:{
           
        }
    },
    {
        id: 4,
        name: "Nike Air Force 1 '07",
        model: "FJ4146-123",
        price: 2599,
        description: "Cómodos, duraderos y atemporales: por una razón son los número 1. La confección de los años 80 se combina con colores clásicos para un estilo que se adapta tanto si estás en la cancha como si estás en movimiento.",
        sizes: ["5.5", "6", "6.5", "7", "7.5", "8"],
        colors: ["Blanco", "Negro"],
        category: "Casual",
        brand: "Nike",
        gender: "Hombre",
        image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fc088909-157b-407c-aee6-e810b3e725a6/AIR+FORCE+1+%2707.png",
        imagesByColor:
        {
            "Blanco":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fc088909-157b-407c-aee6-e810b3e725a6/AIR+FORCE+1+%2707.png",
            "Negro":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a8e62598-1ccd-4dc3-9c5a-7e15aba14cab/AIR+FORCE+1+%2707.png"
        }
    },
    {
        id: 5,
        name: "Nike Air Force 1 Low Retro Premium",
        model: "IO9555-400",
        price: 3399,
        description: "Cómodos, duraderos y atemporales: por una razón son los número 1. Estos Air Force 1 combinan su silueta clásica con cuero de plena flor para ofrecer un look premium.",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10"],
        colors: [],
        category: "Casual",
        brand: "Nike",
        gender: "Hombre",
        image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33459393-9e37-4dfc-bf04-fe250bd5e299/AIR+FORCE+1+LOW+RETRO+PRM+QS.png",
        imagesByColor: {}
    },
    {
        id: 6,
        name: "Nike Dunk Low Retro",
        model: "HF5441-105",
        price: 2599,
        description: "Siempre puedes contar con un clásico. Los Dunk Low combinan un icónico diseño de colores contrastantes con materiales premium y un acolchado suave para ofrecer una comodidad duradera que cambia las reglas del juego. Las posibilidades son infinitas. ¿Cómo vas a usar tus Dunk?",
        sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9"],
        colors: ["Gris", "Negro", "Vela"],
        category: "Dunks & Blazers",
        brand: "Nike",
        gender: "Mujer",
        image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79a35c4b-23ec-4d9e-a2f3-bb0049f96fbd/NIKE+DUNK+LOW+RETRO.png",
        imagesByColor:{
            "Gris":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79a35c4b-23ec-4d9e-a2f3-bb0049f96fbd/NIKE+DUNK+LOW+RETRO.png",
            "Negro":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/623b57f0-3edf-42e1-b23f-9e0711f2023c/NIKE+DUNK+LOW+RETRO.png",
            "Vela":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/08013d8e-be49-4b55-825f-476fdc85dca3/NIKE+DUNK+LOW+RETRO.png"
        }
    },
    {
        id: 7,
        name: "Tatum 4",
        model: "HQ4614-101",
        price: 3099,
        description: "Al igual que el juego de Jayson, sus tenis siempre están en constante cambio. Con cada modelo damos un paso más en innovación sin perder lo que ya funciona. Por eso, incorporamos un enfranque de TPU en la planta del pie para darte aún más estabilidad, sin dejar de ser los tenis más ligeros de toda la colección. Y la confección se inspira en los tenis de atletismo para ofrecer la capacidad de respuesta y responsividad que necesitas para mantenerte a la vanguardia.",
        sizes: ["8", "8.5", "9", "9.5", "10", "10.5"],
        colors: ["Blanco", "Negro"],
        category: "Basketball",
        brand: "Jordan",
        gender: "Hombre",
        image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/796ae977-4772-47ca-93bf-ee73d5611174/JORDAN+TATUM+4.png",
        imagesByColor:{
            "Blanco":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/796ae977-4772-47ca-93bf-ee73d5611174/JORDAN+TATUM+4.png",
            "Negro":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f9a17c37-7bde-46db-96fc-57a3d862b8c1/JORDAN+TATUM+4.png"
        }
    },
    {
        id: 8,
        name: "Air Jordan Mule",
        model: "HJ4292-300",
        price: 3149,
        description: "El calzado Air Jordan Mule combina una clásica parte superior de mocasín, una plataforma de espuma suave y el estilo de herencia Jordan. Lo que consigues es un calzado elegante y cómodo que es lo suficientemente sólido para el día a día. Los laterales de goma ofrecen un look chunky y los elementos premium añaden un toque elegante.",
        sizes: ["5.5", "6", "6.5", "7", "7.5"],
        colors: ["Malaquita", "Negro", "Blanco Cumbre"],
        category: "Lifestyle",
        brand: "Jordan",
        gender: "Mujer",
        image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/55ae1c99-0065-4888-b708-c6d2b0bad244/WMNS+AIR+JORDAN+MULE.png",
        imagesByColor:{
            "Malaquita":"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/55ae1c99-0065-4888-b708-c6d2b0bad244/WMNS+AIR+JORDAN+MULE.png",
            "Negro":"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/636b1eeb-c88d-4fa3-912d-811c178b155e/WMNS+AIR+JORDAN+MULE.png",
            "Blanco Cumbre":"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe69055c-0be8-47c8-8ca3-7683de6a2870/WMNS+AIR+JORDAN+MULE.png"
        }
    },
    {
        id: 9,
        name: "Nike Blazer Mid '77 Vintage",
        model: "FP-850",
        price: 2499,
        description: "En la década del 70, Nike era el \"nuevo del barrio\". Tan nuevo que todavía estábamos incursionando en la escena del básquetbol y probando prototipos en los pies de nuestro equipo local. Por supuesto, el diseño mejoró con los años, pero el nombre permaneció. Los Nike Blazer Mid '77 Vintage: unos clásico desde el inicio.",
        sizes: ["7", "7.5", "8", "8.5", "9", "9.5"],
        colors: ["Blanco/Negro", "Negro/Vela"],
        category: "Dunks & Blazers",
        brand: "Nike",
        gender: "Hombre",
        image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ef4dbed6-c621-4879-8db3-f87296bfb570/BLAZER+MID+%2777+VNTG.png",
        imagesByColor:{
            "Blanco/Negro":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ef4dbed6-c621-4879-8db3-f87296bfb570/BLAZER+MID+%2777+VNTG.png",
            "Negro/Vela":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/df1e72a6-863b-4454-81cb-736d50a2fc2e/BLAZER+MID+%2777+VNTG.png"
        }
    },
    {
        id: 10,
        name: "Air Jordan 40 \"Bordeaux\"",
        model: "HM9931-601",
        price: 4499,
        description: "Solo hay una manera de celebrar los 40 años de los Air Jordan: Haciendo lo que nunca se hizo. Por primera vez, hemos apilado una unidad Zoom Strobel de largo completo sobre una espuma ZoomX Foam de largo completo para ofrecer una amortiguación responsiva, que esté a la altura de la de un maratón.",
        sizes: ["6", "6.5", "7", "7.5", "8"],
        colors: ["Burdeos", "Polvo fotón"],
        category: "Basketball",
        brand: "Jordan",
        gender: "Hombre",
        image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd4e8922-5305-4581-bdf7-f5ca98341212/AIR+JORDAN+40.png",
        imagesByColor:{
            "Burdeos":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd4e8922-5305-4581-bdf7-f5ca98341212/AIR+JORDAN+40.png",
            "Polvo fotón":"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1f74f85e-d6c6-4b21-bf4b-0ba8b567af11/AIR+JORDAN+40.png"
        }
    },
    {
        id: 11,
        name: "Tenis Upland Mule",
        model: "VN000D7ACJ3",
        price: 1866,
        description: "Te presentamos el Upland Mule, una versión renovada de un clásico de los 90, reinventado para el presente. Este slip-on fácil de llevar se inspira en la silueta original del Upland, pero con un diseño actualizado que mejora el ajuste y la comodidad. Con materiales premium para mayor durabilidad y estilo, y detalles llamativos en el logo, el Upland Mule combina la herencia de Vans con una versatilidad moderna y sin esfuerzo.",
        sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11"],
        colors: ["Blanco/Verde", "Blanco/Rosa"],
        category: "Basketball",
        brand: "Vans",
        gender: "Mujer",
        image: "https://vansmx.vtexassets.com/arquivos/ids/2652200-1200-auto?v=638881948355870000&width=1200&height=auto&aspect=true",
        imagesByColor:{
            "Blanco/Verde":"https://vansmx.vtexassets.com/arquivos/ids/2652200-1200-auto?v=638881948355870000&width=1200&height=auto&aspect=true",
            "Blanco/Rosa":"https://vansmx.vtexassets.com/arquivos/ids/2493422-1200-auto?v=638805513441870000&width=1200&height=auto&aspect=true"
        }
    },
    {
        id: 12,
        name: "Choclo Rojos Converse Chuck Lo San Valentín",
        model: "ER-650",
        price: 2599,
        description: "Verte bien nunca se sintió tan cómodo. Estos tenis estilizados de gamuza combinan el look limpio y clásico que te encanta con amortiguación discreta y combinaciones de color en tendencia.",
        sizes: ["5.5", "6", "6.5", "7", "7.5", "8"],
        colors: [],
        category: "Casual",
        brand: "Converse",
        gender: "Mujer",
        image: "https://converse.com.mx/media/catalog/product/c/o/converse-chuck-taylor-gamuza-mujer-choclo-rojo-a17859c-1_nxwd7l24awsrsh1i.jpg",
        imagesByColor: {}
    }
];