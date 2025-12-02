/* admin.js — CRUD sederhana */
let data = JSON.parse(localStorage.getItem('wisataData')||'[]');
const tableBody = document.getElementById('table-body');
const formCard = document.getElementById('form-card');
const btnAdd = document.getElementById('btn-add');
const btnLogout = document.getElementById('btn-logout');
const fName = document.getElementById('f-name');
const fLocation = document.getElementById('f-location');
const fCategory = document.getElementById('f-category');
const fImage = document.getElementById('f-image');
const fDesc = document.getElementById('f-desc');
const fSave = document.getElementById('f-save');
const fCancel = document.getElementById('f-cancel');
let editId = null;

/* render table */
function renderTable(){
  tableBody.innerHTML = data.map(d=>`<tr>
    <td><img src="${d.image}" style="width:120px;height:70px;object-fit:cover;border-radius:6px"/></td>
    <td>${d.name}</td><td>${d.location}</td><td>${d.category}</td>
    <td><button class="btn secondary" onclick="view(${d.id})">Detail</button>
        <button class="btn" onclick="edit(${d.id})">Edit</button>
        <button class="nav-link" onclick="del(${d.id})">Hapus</button></td></tr>`).join('');
}

/* actions */
btnAdd.onclick = ()=>{ editId=null; formCard.classList.remove('hidden'); fName.value=''; fLocation.value=''; fCategory.value='Pantai'; fImage.value=''; fDesc.value=''; };
fCancel.onclick = ()=>formCard.classList.add('hidden');

fSave.onclick = ()=>{
  const name=fName.value.trim(),loc=fLocation.value.trim(),cat=fCategory.value,image=fImage.value.trim(),desc=fDesc.value.trim();
  if(!name||!loc||!image) return alert('Nama, lokasi, image wajib diisi.');
  if(editId){
    const idx=data.findIndex(x=>x.id===editId);
    Object.assign(data[idx],{name,location:loc,category:cat,image,description:desc});
    alert('Terupdate.');
  } else {
    const id = data.length?Math.max(...data.map(x=>x.id))+1:1;
    data.push({id,name,location:loc,category:cat,image,description:desc});
    alert('Ditambahkan.');
  }
  localStorage.setItem('wisataData',JSON.stringify(data)); renderTable(); formCard.classList.add('hidden');
};

function view(id){ const i=data.find(x=>x.id===id); alert(`${i.name}\n\n${i.location}\n\n${i.description}`); }
function edit(id){ const i=data.find(x=>x.id===id); if(!i) return; editId=id; formCard.classList.remove('hidden'); fName.value=i.name; fLocation.value=i.location; fCategory.value=i.category; fImage.value=i.image; fDesc.value=i.description; }
function del(id){ if(!confirm('Hapus data?')) return; data=data.filter(x=>x.id!==id); localStorage.setItem('wisataData',JSON.stringify(data)); renderTable(); alert('Terhapus.'); }

/* logout */
btnLogout.onclick = ()=>{ sessionStorage.removeItem('pariwisata_user'); location.href='index.html'; };

/* init */
renderTable();

/* expose for buttons */
window.view = view; window.edit = edit; window.del = del;
