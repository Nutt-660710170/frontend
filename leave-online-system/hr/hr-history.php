<?php 
    session_start();
    
    if (empty($_SESSION['logincheck']) || $_SESSION['role'] != "Human Resources") {
        header('Location: login.php');
        exit();
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบลางาน</title>
    <link rel="stylesheet" href="../style/navbar.css">
    <link rel="stylesheet" href="../style/index.css">
    <link rel="stylesheet" href="../style/leave.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-brand">
                <i class="fas fa-calendar-check"></i>
                <span>ระบบการลา</span>
        </div>

        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="../hr-index.php" class="nav-link">
                    <i class="fas fa-home"></i>
                    <span>หน้าหลัก</span>
                </a>
            </li>
             <li class="nav-item">
                <a href="hr-request.php" class="nav-link">
                    <i class="fas fa-plus-circle"></i>
                    <span>ตรวจสอบคำร้อง</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="hr-history.php" class="nav-link">
                    <i class="fas fa-history"></i>
                    <span>ประวัติการลา</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="hr-dashboard.php" class="nav-link">
                    <i class="fas fa-user-circle"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="../process/process-logout.php" class="nav-link logout-btn" onclick="return confirm('คุณต้องการออกจากระบบใช่หรือไม่?')">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>ออกจากระบบ</span>
                </a>
            </li>
            </ul>
        </div>
    </nav>

    <div class="welcome-container">
        <h1 class="welcome-text"><?php echo "สวัสดีคุณ ". $_SESSION['first_name'] . " " . $_SESSION['last_name'] . " 🙏"; ?></h1>
    </div>
        <h1>history page</h1>
    <div class="dashboard-container">
</body>
</html>