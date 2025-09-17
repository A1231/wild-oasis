import supabase from "./supabase.js";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log("error", error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
export async function createCabin(cabin) {}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log("error", error);
    throw new Error("Cabins could not be deleted");
  }
}
