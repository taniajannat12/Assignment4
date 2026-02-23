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
const filteredSection=document.getElementById('filtered-section');
const mainContainer = document.querySelector('main');
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



    if(id=='inter-filter-btn'){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
          renderInter();
     
    }
    else if(id=='all-filter-btn'){
       allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');

    }
    else if (id == 'reject-filter-btn') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden')
       renderReject();
    }


}
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const mobile = parentNode.querySelector('.mobile').innerText;
        const react = parentNode.querySelector('.react').innerText;
        const remote = parentNode.querySelector('.remote').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.status').innerText = 'Interview';

        const cardInfo = {
            mobile,
            react,
            remote,
            status: 'Interview',
            notes
        };

        const mobileExist = interList.find(item => item.mobile === cardInfo.mobile);

        if (!mobileExist) {
            interList.push(cardInfo);
        }

        rejectList = rejectList.filter(item => item.mobile !== cardInfo.mobile);

        if (currentStatus === 'inter-filter-btn') {
            renderInter();
        }

        calculate();
    } 
    else if (event.target.classList.contains('reject-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const mobile = parentNode.querySelector('.mobile').innerText;
        const react = parentNode.querySelector('.react').innerText;
        const remote = parentNode.querySelector('.remote').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.status').innerText = 'Reject';

        const cardInfo = {
            mobile,
            react,
            remote,
            status: 'Reject',
            notes
        };

        const mobileExist = rejectList.find(item => item.mobile === cardInfo.mobile);

        if (!mobileExist) {
            rejectList.push(cardInfo);
        }

        interList = interList.filter(item => item.mobile !== cardInfo.mobile);

        if (currentStatus === 'reject-filter-btn') {
            renderReject();
        }

        calculate();
    }
});
        




function renderInter(){
    filteredSection.innerHTML=""
    for(let item of interList)
    {
        let div=document.createElement('div');
       
        div.innerHTML=`   <div class="space-y-4 border-amber-50 shadow-xl rounded-xl px-4 py-4">
            <h3 class="mobile font-bold text-xl">${item.mobile}</h3>
            <p class="react text-gray-400">${item.react}</p>
            <p class="remote text-gray-400">${item.remote}</p>
            <p class="status bg-green-200 p-1 w-32 h-8 rounded-xl box-border">INTERVIEW</p>
            <p class="notes">${item.notes}</p>
        </div>
        `
        filteredSection.appendChild(div);
    }
}



function renderReject(){
    filteredSection.innerHTML=""
    for(let item of rejectList)
    {
        let div=document.createElement('div');
       
        div.innerHTML=`   <div class="space-y-4 border-amber-50 shadow-xl rounded-xl px-4 py-4">
            <h3 class="mobile font-bold text-xl">${item.mobile}</h3>
            <p class="react text-gray-400">${item.react}</p>
            <p class="remote text-gray-400">${item.remote}</p>
            <p class="status bg-green-200 p-1 w-32 h-8 rounded-xl box-border">Rejected</p>
            <p class="notes">${item.notes}</p>
        </div>
        `
        filteredSection.appendChild(div);
    }
}