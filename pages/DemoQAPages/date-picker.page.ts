import { Locator, Page } from "@playwright/test";

export class DatePickerPage {
    private readonly dateInput: Locator;
    private readonly dateAndTimeInput: Locator;
    private readonly monthSelectDate: Locator;
    private readonly monthSelectDateAndTime: Locator;
    private readonly yearSelect: Locator;
    private readonly yearSelectDateAndTime: Locator;
    private readonly daySelect: Locator;
    private readonly timeSelect: Locator;
    private readonly datePickerMonthContainer: Locator;
    private readonly dateAndTimePickerInput: Locator;

    constructor(private readonly page: Page) {

        //Date Selector locators
        this.dateInput = page.locator('#datePickerMonthYearInput');
        this.dateAndTimeInput = page.locator('#dateAndTimePickerInput');
        this.monthSelectDate = page.locator('.react-datepicker__month-select');
        this.yearSelect = page.locator('.react-datepicker__year-select');
        this.daySelect = page.locator('.react-datepicker__day');

        //Date and Time Selector locators
        this.monthSelectDateAndTime = page.locator('.react-datepicker__month-option');
        this.yearSelectDateAndTime = page.locator('.react-datepicker__year-option');
        this.timeSelect = page.locator('.react-datepicker__time-list-item');
        this.datePickerMonthContainer = page.locator('.react-datepicker__month-container');
        this.dateAndTimePickerInput = page.locator('#dateAndTimePickerInput');
    }

    async navigate() {
        await this.page.goto(`${process.env.demoQAUrl}/date-picker`);
    }

    async selectDate(month: string, year: string, day: string) {
        await this.dateInput.click();
        await this.monthSelectDate.selectOption({ label: month });
        await this.yearSelect.selectOption({ label: year });

        //obtener todos los daySelect locators que tengan el texto igual a day y hacer click en el que corresponda al mes seleccionado
        const dayLocators = await this.daySelect.elementHandles();
        for (const dayLocator of dayLocators) {
            const dayText = await dayLocator.textContent();
            const dayMonth = await dayLocator.getAttribute('aria-label');
            if (dayText === day && dayMonth?.includes(month)) {
                await dayLocator.click();
                break;
            }
        }

    }

    async selectDateAndTime(month: string, year: string, day: string, time: string) {

        await this.dateAndTimeInput.click();

        //obtener todos los monthSelectDateAndTime y clickear el que corresponda al mes seleccionado
        await this.page.locator('#dateAndTimePicker > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div > div.react-datepicker__month-container > div.react-datepicker__header.react-datepicker__header--has-time-select > div > div.react-datepicker__month-dropdown-container.react-datepicker__month-dropdown-container--scroll > button > span.react-datepicker__month-read-view--down-arrow').click();
        await this.monthSelectDateAndTime.filter({ hasText: month }).first().click();

        //obtener todos los yearSelectDateAndTime y clickear el que corresponda al año seleccionado
        await this.page.locator('#dateAndTimePicker > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div > div.react-datepicker__month-container > div.react-datepicker__header.react-datepicker__header--has-time-select > div > div.react-datepicker__year-dropdown-container.react-datepicker__year-dropdown-container--scroll > button > span.react-datepicker__year-read-view--down-arrow').click();

        //seleccionar año
        await this.yearSelectDateAndTime.filter({ hasText: year }).first().click();

        //seleccionar dia
        const dayLocators = this.daySelect
            .filter({ hasText: new RegExp(`^${day}$`) }) // Texto exacto (evita que '1' coincida con '10')
            .and(this.page.locator(`[aria-label*="${month}"]`)); // Que el aria-label incluya el mes

        await dayLocators.first().click();


        //seleccionar hora
        await this.timeSelect.filter({ hasText: time }).first().click();

    }

    async converMonthToNumber(month: string): Promise<string> {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthIndex = monthNames.indexOf(month) + 1;
        return monthIndex < 10 ? `0${monthIndex}` : `${monthIndex}`;
    }


    async convertTimeTo12HourFormat(time: string): Promise<string> {
        const [hour, minute] = time.split(':').map(Number);
        const period = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minute.toString().padStart(2, '0')} ${period}`;
    }
}

