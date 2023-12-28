import mongoose, { Schema } from "mongoose";

const formIllness = new Schema({
    ALLERGIC: {
        type: Boolean
    },
    DIABETIC: {
        type: Boolean
    },
    EPILEPTIC: {
        type: Boolean
    },
    ARTHRITIC: {
        type: Boolean
    },
    CARDIOVASCULAR: {
        type: Boolean
    },
    HYPERTENSIVE: {
        type: Boolean
    },
    HEMATOLOGIC: {
        type: Boolean
    },
    TRAUMATIC: {
        type: Boolean
    },
    PSYCHIATRIST: {
        type: Boolean
    },
    NEOPLASTIC: {
        type: Boolean
    },
    SURGICAL: {
        type: Boolean
    },
    ENDOCRINOLOGIST: {
        type: Boolean
    },
    GENITOURINARY: {
        type: Boolean
    },
    NEUROLOGICAL: {
        type: Boolean
    },
    ASTHMATIC: {
        type: Boolean
    },
    ICTERICO: {
        type: Boolean
    },
    CONGENITAL: {
        type: Boolean
    },
    AUDIOLOGICAL: {
        type: Boolean
    },
    TRANSFUSIONAL: {
        type: Boolean
    },
    PARASITES: {
        type: Boolean
    },
    OTHER: {
        type: Boolean
    },
    MEASLES: {
        type: Boolean
    },
    RUBELLA: {
        type: Boolean
    },
    OTITIS: {
        type: Boolean
    },
    CHICKENPOX: {
        type: Boolean
    },
    SCARLETFEVER: {
        type: Boolean
    },
    VENTS: {
        type: Boolean
    },
    TUBERCULOSIS: {
        type: Boolean
    },
    PAROTITIS: {
        type: Boolean
    },
    TONSILLITIS: {
        type: Boolean
    },
    BRONCHITIS: {
        type: Boolean
    },
    OTHER: {
        type: Boolean
    },
    MENARCHE: {
        type: Boolean
    },
    RHYTHM: {
        type: Boolean
    },
    MENSTRUALCYCLE: {
        type: Boolean
    },
    FEATURES: {
        type: Boolean
    },
    FUM: {
        type: Boolean
    },
    HOME_ACTIVE_SEX_LIFE: {
        type: Boolean
    },
    GESTATIONS: {
        type: Boolean
    },
    DELIVERY: {
        type: Boolean
    },
    CAESAREA: {
        type: Boolean
    },
    ABORTION: {
        type: Boolean
    },
    FERTILITY_CONTROL: {
        type: Boolean
    },
    OTHER_ILLNESS: {
        type: Boolean
    },
    INFECTIONS: {
        type: Boolean
    },
    PROSTATE_DISEASE: {
        type: Boolean
    },
    REPRODUCTIVE_DISORDERS: {
        type: Boolean
    },
    TESTICULAR_PAIN: {
        type: Boolean
    },
    OTHER: {
        type: Boolean
    },
    FREQUENT_OPAQUE_URINATION: {
        type: Boolean
    },
    MASSES_IN_TESTICLES: {
        type: Boolean
    },
    VASECTOMY: {
        type: Boolean
    },
    PEN_INFECTION: {
        type: Boolean
    },
    PROSTATE_INFECTION: {
        type: Boolean
    },
    TESTICULAR_INFECTION: {
        type: Boolean
    },
    DIGESTIVE: {
        type: Boolean
    },
    GENITOURINARY: {
        type: Boolean
    },
    CARDIOVASCULAR: {
        type: Boolean
    },
    RESPIRATORY: {
        type: Boolean
    },
    NEUROLOGICAL: {
        type: Boolean
    },
    SKINYTEGUMENTS: {
        type: Boolean
    },
    ENDOCRINE: {
        type: Boolean
    },
    HEMATOLOGIC: {
        type: Boolean
    },
    SKELETAL_MUSCLE: {
        type: Boolean
    },
    PSYCHIATRIST: {
        type: Boolean
    },
})
export default mongoose.model('enfermedades', formIllness)

