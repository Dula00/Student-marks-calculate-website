function calculatesubjectmarks(){
	const studentname=document.getElementById("studentname").value.trim();
	const registrationNo=document.getElementById("registrationNo").value.trim();
	const sinhala=parseFloat(document.getElementById("sinhala").value);
	const english=parseFloat(document.getElementById("english").value);
	const tamil=parseFloat(document.getElementById("tamil").value);
	const calculatemarksDiv=document.getElementById("calculatemarks");
	
	
	if(!studentname || !registrationNo || isNaN(sinhala)  || isNaN(english)  ||  isNaN(tamil)){
		alert("Please fill all fields correctly!");
		return;
	}
	
	if(sinhala <0 || sinhala>100 || english<0 || english >100  || tamil <0  || tamil>100){
		alert ("marks must be between  0 and 100!");
		return;
	}
	
	const total=sinhala+english+tamil;
	const average=total/3;
	let grade;
	
	if(average >= 80) grade = "A";
	else if (average >=65) grade="B";
	else if (average>=50) grade="C";
	else if (average >=35) grade="S";
	else grade="E";
	
	calculatemarksDiv.innerHTML =`
	   <h3>Calculate Marks Summary</h3>
	   <p><b>Student Name:</b> ${studentname}</p>
	   <p><b>Registration No:</b> ${registrationNo}</p>
	   <p><b>Total Marks:</b> ${total}</p>
	   <p><b>Average Marks:</b> ${average.toFixed(2)}</p>
	   <p><b>Grade:</b> ${grade}</p>
	   `;
}
	    
	
	
	