saveProfile()
{
    const Gname = document.getElementById('first-name');
    const Gsurname = document.getElementById('last-name');
    const Gbio = document.getElementById('bio');
    const Gaddress = document.getElementById('address');
    const Gnewsletter = document.getElementById('address');

    const user_to_save = {
        name: Gname,
        surname: Gsurname,
        bio: Gbio,
        address: Gaddress,
        newsletter: Gnewsletter
    }

    const fs = require('fs');
    const save_data = (user_to_save) =>{
        const jsonData = JSON.stringify(user_to_save);
        fs.writeFile('src/users.json', jsonData, finished);
    }
    saveData(user_to_save);

    newLink.click();
}