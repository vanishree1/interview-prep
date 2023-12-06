// @author : Rohan Prasad
// Descrip : Browser Coding - 3
const folders = [
    {
      title: "Files",
      id: "0",
      children: [
        {
          title: "src",
          id: "1",
          children: [
            {
              title: "js",
              id: "2",
              children: [
                {
                  title: "main.js",
                  id: "3",
                  children: []
                },
                {
                  title: "services.js",
                  id: "4",
                  children: []
                },
                {
                  title: "utils.js",
                  id: "5",
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: "index.html",
          id: "7",
          children: []
        },
        {
          title: "package.json",
          id: "8",
          children: []
        }
      ]
    },
    {
        title: "test",
        id: "9",
        children: [
            {
                title: "file1",
                id: "10",
                children: []
            }
        ]
    }
  ];
  
  // @author :Rohan
  function makeTree(tree, parentElement) {
    if (!tree) return;
    console.log(tree, parentElement);
    const ul = document.createElement("ul");
    tree.forEach(folder => {
        const li = document.createElement("li");
        li.className = folder.children.length > 0 ? "folder" : "file";
        li.textContent = folder.title;
      
        li.addEventListener("click", (e) => {
            e.stopPropagation();
            console.log('what is e ==>', e.target.children)
            const ul = e.target.children;
            if (ul && ul[0]) {
                console.log("ul ==>", ul)
                ul[0].classList.toggle("hidden");
            }
        });
       
        if (folder.children.length > 0) {
            makeTree(folder.children, li);
        }
        ul.appendChild(li);
    });
    parentElement.appendChild(ul);
    // tree.forEach((e) => {
    //   const ul = document.createElement("ul");
  
    //   if (e.children?.length) {
    //     const li = document.createElement("li");
    //     li.innerText = e.title;
    //     ul.appendChild(li);
    //     makeTree(e.children, li);
    //     parentElement.appendChild(ul);
    //   } else {
    //     const li = document.createElement("li");
    //     li.innerText = e.title;
    //     ul.appendChild(li);
    //     parentElement.appendChild(ul);
    //   }
    // });
  }
  
  makeTree(folders, document.getElementById("uuu"));
  
  
//   foldersName.forEach(function (e) {
//     let foldersName = e.parentElement;
//     console.log(foldersName);
//     foldersName.classList.add("folder");
  
//     let backupOfThisFolder = e;
  
//     let a = document.createElement("a");
//     foldersName.appendChild(a);
  
//     foldersName.append(backupOfThisFolder);
  
//     foldersName.querySelector("li").onclick = (e) => {
//       console.log('what s e', e);

    //   e.target.classList.toggle("hidden");
      
    // };
    // now add a slideToggle to the <a> we just added
//   });
  