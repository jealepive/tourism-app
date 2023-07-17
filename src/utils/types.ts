export interface ITouristicAttraction {
    id: number
    name: string
    description: string
    city: string
    cityId: number
    latitude: number
    longitude: number
    images: string[]
}

export interface ITouristicAttractionsResponse {
    data: ITouristicAttraction[]
    page: number
    pageCount: number
    totalRecords: number
}