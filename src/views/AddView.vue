<template>
    <div class="add page-width">
        <h2>Nuevo evento</h2>

        <form class="add-form">
            <div class="field">
                <input type="text" name="event[title]" id="EventTitle" required />
                <label for="EventTitle">Título *</label>
            </div>

            <div class="field">
                <textarea name="event[description]" id="EventDescription" required></textarea>
                <label for="EventDescription">Descripción *</label>
            </div>

            <div class="field-group">
                <div class="field">
                    <input type="text" name="event[cta]" id="EventCta" required />
                    <label for="EventCta">CTA *</label>
                </div>

                <!-- categorias -->
            </div>

            <!-- imagenes,  -->

            <legend>Fechas</legend>
            <div class="field-group">
                <div class="field">
                    <input type="text" name="event[date]" id="EventDate" required />
                    <label for="EventDate">Fecha *</label>
                </div>

                <div class="field">
                    <input type="text" name="event[startsAt]" id="EventStartsAt" required />
                    <label for="EventStartsAt">Horario de inicio *</label>
                </div>

                <div class="field">
                    <input type="text" name="event[endsAt]" id="EventEndsAt" />
                    <label for="EventEndsAt">Horario de finalización</label>
                </div>
            </div>

            <div class="field-group">
                <div class="field">
                    <input type="number" name="event[totalTickets]" id="EventTotalTickets" required />
                    <label for="EventTotalTickets">Cupos totales *</label>
                </div>

                <div class="field">
                    <input type="number" name="event[availableTickets]" id="EventAvailableTickets" />
                    <label for="EventAvailableTickets">Cupos disponibles</label>
                </div>

                <div class="field">
                    <input type="number" name="event[price]" id="EventPrice" />
                    <label for="EventPrice">Precio</label>
                </div>
            </div>

            <legend>Ubicación</legend>
            <div class="field">
                <input type="text" name="event[location]" id="EventLocation" />
                <label for="EventLocation">Ubicación</label>
            </div>

        </form>
    </div>
</template>