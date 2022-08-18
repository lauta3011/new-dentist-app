import React, { useState } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";

function NewAppointment() {
    const [name, setName] = useState();
    const [ci, setCi] = useState();
    const [phone, setPhone] = useState();
    const [alergies, setAlergies] = useState();
    const [notes, setNotes] = useState();

    const addNewPatient = () => {
        const patient = {
            name: name,
            ci: ci,
            phone: phone,
            alergies: alergies,
            notes: notes,
        }

        console.log('aca ', patient);
    }

    return (
        <Form>
            <div className="NewAppointment">
                <h1>Ingresar una nueva consulta</h1>

                <div className="data">
                    <Input handleChange={(text) => setName(text)} for="name" type="text" text="Nombre completo" />
                    <Input handleChange={(text) => setCi(text)} for="ci" type="num" text="Cedula" />
                    <Input handleChange={(text) => setPhone(text)} for="phone" type="num" text="Telefono de contacto" />
                    <Input handleChange={(text) => setAlergies(text)} for="alergies" type="textarea" text="Alergias - Medicacion - Etc" />
                    <Input handleChange={(text) => setNotes(text)} for="notes" type="textarea" text="Notas a tener en cuenta" />
                    <Input handleChange={(text) => setNotes(text)} for="notes" type="textarea" text="Notas a tener en cuenta" />
                    <Input handleChange={(text) => setNotes(text)} for="notes" type="textarea" text="Notas a tener en cuenta" />
                    <Input handleChange={(text) => setNotes(text)} for="notes" type="textarea" text="Notas a tener en cuenta" />
                    <Input handleChange={(text) => setNotes(text)} for="notes" type="textarea" text="Notas a tener en cuenta" />
                    <Input handleChange={(text) => setNotes(text)} for="notes" type="textarea" text="Notas a tener en cuenta" />
                    <Input handleChange={(text) => setNotes(text)} for="notes" type="textarea" text="Notas a tener en cuenta" />

                    <Button handleClick={() => addNewPatient()} text="ingresar paciente" />
                </div>
            </div>
        </Form>
    )
}

export default NewAppointment;