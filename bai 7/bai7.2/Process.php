<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $selected = $_POST["selected"] ?? [];
    $values = $_POST["value"] ?? [];

    echo "<h2>Danh sach hoa don da chon</h2>";

    if (empty($selected)) {
        echo "Ban chua chon hoa don nao!";
    } else {
        echo "<table border='1' cellpadding='8'>";
        echo "<tr>
                <th>Order No</th>
                <th>Value</th>
              </tr>";

        foreach ($selected as $order) {
            $giaTri = $values[$order] ?? 0;

            echo "<tr>";
            echo "<td>" .
                htmlspecialchars($order, ENT_QUOTES, "UTF-8") .
                "</td>";
            echo "<td>" .
                htmlspecialchars($giaTri, ENT_QUOTES, "UTF-8") .
                "</td>";
            echo "</tr>";
        }

        echo "</table>";
    }

    echo "<br><a href='Orders.html'>Quay lai</a>";
} else {
    echo "Vui long gui du lieu tu Orders.html";
}
?>