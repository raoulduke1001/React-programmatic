import "./InterestsStatistics.scss";

import { Typography } from "../../ui";
import { CardWhite, Accordion, AccordionChildren } from "../../widgets";

function InterestsStatistics() {
  return (
    <div className="InterestsStatistics">
      <CardWhite>
        <Typography variant="h2" color="dark-gray">
          Интересы
        </Typography>

        <div className="title-groups">
          <Typography
            className="name"
            variant="body1"
            color="dark-gray"
          ></Typography>
          <div className="items">
            <div className="item">
              <Typography variant="span" color="dark-gray">
                Показано рекламы
              </Typography>
            </div>
            <div className="item">
              <Typography variant="span" color="dark-gray">
                Размер сегмента
              </Typography>
            </div>
            <div className="item">
              <Typography variant="span" color="blue">
                Affinity Index
              </Typography>
            </div>
          </div>
        </div>

        <div className="statistics-content">
          <Accordion
            title="Авто"
            shown="12 342"
            segment="12 342"
            index="23 %"
            items
          >
            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />

            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />

            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />
          </Accordion>

          <Accordion
            title="Авто"
            shown="12 342"
            segment="12 342"
            index="23 %"
            items
          >
            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />

            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />

            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />
          </Accordion>

          <Accordion
            title="Авто"
            shown="12 342"
            segment="12 342"
            index="23 %"
            items
          >
            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />

            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />

            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />
          </Accordion>

          <Accordion
            title="Авто"
            shown="12 342"
            segment="12 342"
            index="23 %"
            items
          >
            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />

            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />

            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />
          </Accordion>

          <Accordion
            title="Авто"
            shown="12 342"
            segment="12 342"
            index="23 %"
            items
          >
            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />

            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />

            <AccordionChildren
              titleChildren="Авто премиум класс"
              shownChildren="12 342"
              segmentChildren="20 675"
              indexChildren="23 %"
              subItems
            />
          </Accordion>
        </div>
      </CardWhite>
    </div>
  );
}

export default InterestsStatistics;
