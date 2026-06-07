import axios from "axios"


//create a tool for mcp calling
export const recommendCatsTool = async(kidsFriendly:boolean,apartmentFriendly:boolean) => {
    const res = await axios.post("http://localhost:5000/api/cats/recommend",{
        kidsFriendly,
        apartmentFriendly
    })
    return res.data
}