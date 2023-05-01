import { getShoppingCart } from "../utils/fakedb";


export const getJobsData = async() => {
    const jobsData = await fetch('/jobData.json')

    const jData = await jobsData.json()

    const appliedJobData = getShoppingCart()

    let appliedJobsInfo = [];
    
    for (const id in appliedJobData){
        const foundJobs = jData.find(jobInfo => jobInfo.id === parseInt(id))
        // console.log(foundJobs)
        if(foundJobs){
            foundJobs.quantity = appliedJobData[id]
            appliedJobsInfo.push(foundJobs)
        }
    }
    return {appliedJobsInfo, jobsData}
}

