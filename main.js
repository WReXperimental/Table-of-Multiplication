import './style.css'
const app =document.getElementById('app')

const span=document.createElement('span')
span.textContent='九九乘法表';
app.append(span)


const table=document.createElement('table')
app.append(table)


for(let i=1; i<=9;i++){
const tr=document.createElement('tr')
app.append(tr)
table.append(tr)

  for(let j=1; j<=i; j++){
const td=document.createElement('td')
td.textContent=`${j} x ${i} = `+`${i*j}`
tr.appendChild(td)
  }
}



