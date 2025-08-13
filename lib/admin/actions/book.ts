"use server";

const createBook = async (params: BookParams) {
    try {

    } catch (error) {
        console.log(error);

        return (
            success: false,
            message: "An error occurred while creating the book"
        )
    }
}