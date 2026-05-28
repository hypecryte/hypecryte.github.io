import { Button } from "../Button/Button";
import styles from "./ButtonSection.module.css";

// Импортируем общие иконки из вашей shared-папки
// Подставьте правильный относительный путь, если папка находится в другом месте
import {
    PencilIcon,
    ExportIcon,
    ImportIcon,
    TrashIcon,
    PrinterIcon,
    RedTriangle
} from "../shared/Icons";

export const ButtonSection = () => {
    return (
        <section className={styles.buttonContainer}>
            <div className={styles.gridFirst}>
                {/* Ряд 1: ОБЫЧНЫЕ КНОПКИ */}
                <Button text="Просмотреть" forceState="default" />
                <Button text="Просмотреть" forceState="default" btnBorderColor="#dc241f" btnBgColor="#ebebeb" btnTextColor="#333" />
                <Button text="Просмотреть" forceState="default" btnTextColor="#fff" btnBgColor="#ca130c" btnBorderColor="#ca130c" />
                <Button text="Просмотреть" forceState="default" icon={<RedTriangle />} />
                <Button text="Просмотреть" forceState="default" btnTextColor="white" btnBgColor="#6e9735" btnBorderColor="#6e9735" />
                <Button text="Просмотреть" forceState="default" btnBorderColor="#6e9735" btnBgColor="#ebebeb" btnTextColor="#333" />

                {/* Ряд 2: НАВЕДЕННЫЕ КНОПКИ */}
                <Button text="Просмотреть" forceState="hover" />
                <Button text="Просмотреть" forceState="hover" btnBorderColor="#dc241f" btnBgColor="#ebebeb" btnTextColor="#333" />
                <Button text="Просмотреть" forceState="hover" btnTextColor="#fff" btnBgColor="#ca130c" btnBorderColor="#ca130c" />
                <Button text="Просмотреть" forceState="hover" icon={<RedTriangle />} />
                <Button text="Просмотреть" forceState="hover" btnTextColor="white" btnBgColor="#6e9735" btnBorderColor="#6e9735" />
                <Button text="Просмотреть" forceState="hover" btnBorderColor="#6e9735" btnBgColor="#ebebeb" btnTextColor="#333" />

                {/* Ряд 3: АКТИВНЫЕ КНОПКИ */}
                <Button text="Просмотреть" forceState="active" />
                <Button text="Просмотреть" forceState="active" btnBorderColor="#dc241f" btnBgColor="#ebebeb" btnTextColor="#333" />
                <Button text="Просмотреть" forceState="active" btnTextColor="#fff" btnBgColor="#ca130c" btnBorderColor="#ca130c" />
                <Button text="Просмотреть" forceState="active" icon={<RedTriangle />} />
                <Button text="Просмотреть" forceState="active" btnTextColor="white" btnBgColor="#6e9735" btnBorderColor="#6e9735" />
                <Button text="Просмотреть" forceState="active" btnBorderColor="#6e9735" btnBgColor="#ebebeb" btnTextColor="#333" />

                {/* Ряд 4: ОТКЛЮЧЕННЫЕ КНОПКИ */}
                <Button text="Просмотреть" disabled={true} />
                <Button text="Просмотреть" disabled={true} btnBorderColor="#dc241f" btnBgColor="#ebebeb" btnTextColor="#333" />
                <Button text="Просмотреть" disabled={true} btnTextColor="#fff" btnBgColor="#ca130c" btnBorderColor="#ca130c" />
                <Button text="Просмотреть" disabled={true} icon={<RedTriangle />} />
                <Button text="Просмотреть" disabled={true} btnTextColor="white" btnBgColor="#6e9735" btnBorderColor="#6e9735" />
                <Button text="Просмотреть" disabled={true} btnBorderColor="#6e9735" btnBgColor="#ebebeb" btnTextColor="#333" />
            </div>

            <div className={styles.gridSecond}>
                <Button className={styles.isolatedButton} text="Редактировать" btnBgColor="#ebebeb" icon={<PencilIcon />} iconPosition="start" />
                <Button className={styles.isolatedButton} text="Выгрузить в Excel" btnBgColor="#ebebeb" icon={<ExportIcon />} iconPosition="start" />
                <Button className={styles.isolatedButton} text="Удалить список" btnBgColor="#ebebeb" icon={<TrashIcon />} iconPosition="start" />
                <Button className={styles.isolatedButton} text="Распечатать" btnBgColor="#ebebeb" icon={<PrinterIcon />} iconPosition="start" />
                <Button className={styles.isolatedButton} text="Загрузить из файла" btnBgColor="#ebebeb" icon={<ImportIcon />} iconPosition="start" />
            </div>

        </section>
    );
};
