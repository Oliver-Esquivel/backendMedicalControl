import mongoose, { Schema } from "mongoose";

const formData = new Schema({
    examen_medico: String,
    income: {
        type: Date,
        default: Date.now()
    },
    period: String,
    update_At: {
        type: Date,
        default: Date.now(),
    },
    name_person: String,
    age:  Number,
    gender: String,
    edo_civil: String,
    turn: String,
    date_birth: {
        type: Date,
        default: Date.now()
    },
    plant: String,
    type_contract: String,
    department: String,
    name_supervisor: String,
    plant_ant: {
        type: Date,
        default: Date.now()
    },
    position_ant: {
        type: Date,
        default: Date.now()
    },
    position_Work: {
        type: Date,
        default: Date.now()
    },
    domicile: String,
    place_where_work: String,
    work_how_long: String,
    exposed_agents: String,
    products_produces: String,
    daily_hours_worked: {
        type: Date,
        default: Date.now
    },
    days_worked:  Number,
    break_fixed:  Number,
    turn_work: String,
    position_or_activity: String,
    accidents_work: String,
    inability: Boolean,
    laboratory_test_RX: Boolean,
    other: String,
    ergonomic_risk_work: Boolean,
    specify: String,
    analysis_ergonomic: Boolean,
    rom: String,
    inhabited_by: Number,
    no_rooms:  Number,
    animals_at_home: Boolean,
    smoking: Boolean,
    no_year: Number,
    quantity_for_days:  Number,
    alcoholism: Boolean,
    no_year_alcoholism: Number,
    frequency: String,
    drug_addiction: String,
    clean: String,
    feed: String,
    immunization: String,
    deport_activity: String,
    asthmatics: Boolean,
    diabetic: Boolean,
    psychiatrist: Boolean,
    epileptic: Boolean,
    neoplastic: Boolean,
    arthritic: Boolean,
    obesity: Boolean,
    cardiovascular: Boolean,
    hypertensive: Boolean,
    congenital: Boolean,
    hematologic: Boolean,
    audiological: Boolean,
    tuberculous: Boolean,
    syphilises: Boolean,
    ulcers: Boolean,
    lithiasis: Boolean,
    other_illness: Boolean
})

export default mongoose.model('examenMedico', formData)