

export interface OwnerDashboardData {
    // data: any;
    message:string,
    toolName:string,
    value:number
} 

export interface OwnerDashboardState{
    demandedToolsData:OwnerDashboardData[],
    brokenToolsData:OwnerDashboardData[],
    pricedToolsData:OwnerDashboardData[]
}

export type OwnerDashboardAction ={
    type:'DISPLAY DEMANDED TOOLS'
    payload:OwnerDashboardData[]
} | {
    type:'DISPLAY BROKEN TOOLS',
    payload: OwnerDashboardData[]
} | {
    type: 'DISPLAY PRICED TOOLS',
    payload:OwnerDashboardData[]
}

export type OwnerDashboardMethods={
    handleDemandedTools : ()=>void;
    handleBrokenTools : ()=>void;
    handlePricedTools : ()=>void;
}