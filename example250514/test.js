const songList = [
  "너에게 닿기를",
  "like JENNIE",
  "Drowning",
  "모르시나요(PROD.로코베리)",
  "TOO BAD",
  "HOME SWEET HOME",
  "나는 반딧불",
  "Whiplash",
  "REBEL HEART",
  "HOT",
];

const songDetails = {
  "너에게 닿기를": { artist: "10CM", likes: 58471 },
  "like JENNIE": { artist: "제니", likes: 76168 },
  "Drowning": { artist: "WOODZ", likes: 189248 },
  "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
  "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
  "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
  "나는 반딧불": { artist: "황가람", likes: 141198 },
  "Whiplash": { artist: "aespa", likes: 132606 },
  "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
  "HOT": { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
};


  const songListEl = document.getElementById('songList');
  songListEl.innerHTML="";

  const list = document.createElement('p');
  list.textContent = "최신노래 리스트"
  songListEl.append(list);

  // for문 반복
  // for(let i=0; i < songList.length; i++){
  //   const listItem = document.createElement('li');
  //   listItem.classList.add('list-group-item');
  //   listItem.textContent = `${i + 1}. ${songList[i]}`;
  //   console.log(listItem);
  //   songListEl.appendChild(listItem); 
  // }

  //while
  // i=0;
  // while(i<songList.length){
  //   const listItem = document.createElement('li');
  //   listItem.classList.add('list-group-item');
  //   listItem.textContent = `${i + 1}. ${songList[i]}`;
  //   console.log(listItem);
  //   songListEl.appendChild(listItem); 
  //    i++;
  // }

  // for each
  //   songList.forEach((songList, index) => {
  //   const listItem = document.createElement('li');
  //   listItem.classList.add('list-group-item');
  //   listItem.textContent = `${index+1}. ${songList}`;
  //   console.log(listItem);
  //   songListEl.appendChild(listItem); 
  // })

  // for of
  let c= 0;
  for(let songLists of songList){
   const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.textContent = `${c+1}. ${songLists}`;
    c++
    songListEl.appendChild(listItem); 
  }

  //노래 정보 리스트
  const list2 = document.createElement('p');
  const songListE2 = document.getElementById('songList2');
  songListE2.innerHTML = ""
  list2.textContent = "노래 정보 리스트"
  songListE2.append(list2);


  let d=0;
  for(const info in songDetails){
     const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
      listItem.innerHTML = `<strong>${info}</strong><br>
    가수: ${songDetails[info].artist}
     ${songDetails[info].likes}`
    //또 다른 방법
    // listItem.textContent = ` ${d+1}. ${info} 
    // ${songDetails[info].artist}
    // ${songDetails[info].likes}`;
    // d++
  
    
    songListE2.appendChild(listItem); 
  }

  // 좋아요 6만개 이상 출력  좋아요 >= 60000
  // 6만개가 아니면 출력 안함
  const list3 = document.createElement('p');
  const songListE3 = document.getElementById('songList3');
  songListE3.innerHTML = ""
  list3.textContent = "좋아요 6만개 이상"
  songListE3.append(list3);


  for(const like in songDetails){
     if(songDetails[like].likes > 60000){
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `<strong>${like}</strong><br>
      가수: ${songDetails[like].artist}
      ${songDetails[like].likes}`
       songListE3.appendChild(listItem);
       songListE3.appendChild(listItem);
     }
  }

  //함수로 호출하는 방법
  const songList3 = document.getElementById('songList3');
  songList3.innerHTML="";
  drawList();

  function addBtn(){
    const title = document.getElementById('title').value;
    const name = document.getElementById('name').value;
    const likey = document.getElementById('likey').value;

      songDetails[title] = {
        artist: name,
        likes: likey,
      };
      drawList();
    
  }

  function drawList(){
    songListE3.innerHTML = ""
    for(const like in songDetails){
      if(songDetails[like].likes > 60000){
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${like}</strong><br>
        가수: ${songDetails[like].artist}
        ${songDetails[like].likes}`;
          listItem.classList.add('list-group-item');
        songListE3.appendChild(listItem);
      }
    }
  }
