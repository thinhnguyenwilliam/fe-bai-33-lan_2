const DOMAIN="http://localhost:3002";


export const get = async (api) => {
    const response = await fetch(DOMAIN+api);//call API bằng method GET, kg ghi mặc định GET
    const result = await response.json();

    return result;
}

///////////////


export const create=async(api,data)=>{
    const response = await fetch(DOMAIN+api, { // chờ tạo xong, gán lại cho response
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const result = await response.json();
    return result;
}

//////////////

export const edit=async(api,data)=>{
    const response = await fetch(DOMAIN+ api, { // chờ tạo xong, gán lại cho response
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const result = await response.json();//từ json thành object, đợi insert xong bản ghi đó vào database thì mới chuyển từ json thành object

    return result;
}


///
export const deleteSomething=async (api)=>{
    const response = await fetch(DOMAIN+api, { // chờ tạo xong, gán lại cho response
        method: "DELETE"
    })

    const result = await response.json();
    return result;
}