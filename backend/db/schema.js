import mongoose from "mongoose";

// MongoDB Schema
const userSchema = new mongoose.Schema({
    name: String,
    number: Number,
    password: String,
    location: [{
        latitude: Number,
        longitude: Number,
    }],
    language: String,
});

const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    location: [{
        latitude: Number,
        longitude: Number,
    }],
    // worker: [{
    //     profession: String,
    //     quantity: Number,
    // }],
    password: String,
    language: String,
    available: Boolean,
    EmergencyCases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Emergency" }],
    NormalCases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Normal" }],
    SolvedCases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Solved" }],
});

const districtSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    location: [{
        latitude: Number,
        longitude: Number,
    }],
    password: String,
    EmergencyCases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Emergency" }],
    NormalCases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Normal" }],
    SolvedCases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Solved" }],
});

const emergencySchema = new mongoose.Schema({
    name: String,
    number: Number,
    // location: [{
    //     latitude: Number,
    //     longitude: Number,
    // }],
    cause: String,
    date: String
    // campId: Number
});

const normalSchema = new mongoose.Schema({
    name: String,
    number: Number,
    location: [{
        latitude: Number,
        longitude: Number,
    }],
    cause: String,
    // photo: Buffer,
    campId: Number
});

const solvedSchema = new mongoose.Schema({
    name: String,
    number: Number,
    location: [{
        latitude: Number,
        longitude: Number,
    }],
    cause: String,
    campId: Number
});

const contactSchema = new mongoose.Schema({
    name: String,
    number: Number,
    description: String,
    userId: Number
});

// MongoDB Models
export const User = mongoose.model("User", userSchema);
export const Admin = mongoose.model("Admin", adminSchema);
export const District = mongoose.model("District", districtSchema);
export const Emergency = mongoose.model("Emergency", emergencySchema);
export const Normal = mongoose.model("Normal", normalSchema);
export const Solved = mongoose.model("Solved", solvedSchema);
export const Contact = mongoose.model("Contact", contactSchema);
