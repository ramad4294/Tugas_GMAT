const text = '460394_Muhamad Bagus Ramadhani_PR ISIS 6_pdf';
const arr = text.split('_');

const data = { 
    niu: Number(arr[0]),
    nama: arr[1],
    judul: arr[2],
    ekstensi: arr[3],
};
console.log(data)