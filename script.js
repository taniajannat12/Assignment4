let interList=[];
let rejectList=[];
let currentStatus='all';

const total=document.getElementById('total');
const inter=document.getElementById('inter');
const reject=document.getElementById('reject');
const allCards=document.getElementById('all-cards');
const allFilterBtn=document.getElementById('all-filter-btn');
const interFilterBtn=document.getElementById('inter-filter-btn');
const rejectFilterBtn=document.getElementById('reject-filter-btn');

function calculate(){
    total.innerText=allCards.children.length;
    inter.innerText=interList.length;
    reject.innerText=rejectList.length;
}
calculate();




function toggleStyle(id){
    allFilterBtn.classList.add('bg-gray-300','text-white');
    interFilterBtn.classList.add('bg-gray-300','text-white');
    rejectFilterBtn.classList.add('bg-gray-300','text-white');

allFilterBtn.classList.remove('bg-blue-500','text-black');
    interFilterBtn.classList.remove('bg-amber-50','text-black');
    rejectFilterBtn.classList.remove('bg-amber-50','text-black');



    const selected=document.getElementById(id);
    currentStatus=id;
    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-black', 'text-white')




}