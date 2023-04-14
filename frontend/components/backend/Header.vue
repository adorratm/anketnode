<template>
  <div>
    <!-- Top Navbar -->
    <nav class="navbar navbar-expand-xl navbar-dark fixed-top hk-navbar">
      <a
        id="navbar_toggle_btn"
        class="navbar-toggle-btn nav-link-hover"
        href="javascript:void(0);"
        ><i class="fa fa-bars"></i
      ></a>
      <nuxtLink class="navbar-brand" to="/">
        <img
          class="brand-img d-inline-block"
          src="/backend/img/logo.webp"
          alt="brand"
          width="150"
          height="33"
        />
      </nuxtLink>
      <ul class="navbar-nav hk-navbar-content">
        <li class="nav-item dropdown dropdown-notifications">
          <a
            class="nav-link dropdown-toggle no-caret"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            ><i class="fa fa-bell"></i
            ><span class="badge-wrap"
              ><span
                class="badge badge-primary badge-indicator badge-indicator-sm badge-pill pulse"
              ></span></span
          ></a>
          <div
            class="dropdown-menu dropdown-menu-end"
            data-dropdown-in="fadeIn"
            data-dropdown-out="fadeOut"
          >
            <h6 class="dropdown-header">
              Notifications <a href="javascript:void(0);" class="">View all</a>
            </h6>
            <div class="notifications-nicescroll-bar">
              <a href="javascript:void(0);" class="dropdown-item">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <div class="avatar avatar-sm">
                      <span
                        class="avatar-text avatar-text-warning rounded-circle"
                      >
                        <span class="initial-wrap"
                          ><span
                            ><i
                              class="fa fa-bell"
                            ></i></span
                        ></span>
                      </span>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <div>
                      <div class="notifications-text">
                        Last 2 days left for the project
                      </div>
                      <div class="notifications-time">15d</div>
                    </div>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown dropdown-authentication">
          <a
            class="nav-link dropdown-toggle no-caret"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div
              class="d-flex align-items-center align-self-center align-content-center"
            >
              <div
                class="flex-shrink-0 d-flex align-items-center align-self-center align-content-center"
              >
                <div>
                  <i class="fa fa-user-circle fs-5"></i>
                </div>
                <span class="badge badge-success badge-indicator"></span>
              </div>
              <div class="flex-grow-1 ms-3">
                <span>Madelyn Shane<i class="fa fa-chevron-down"></i></span>
              </div>
            </div>
          </a>
          <div
            class="dropdown-menu dropdown-menu-end"
            data-dropdown-in="flipInX"
            data-dropdown-out="flipOutX"
          >
            <a class="dropdown-item d-flex align-items-center align-self-center align-content-center" href="profile.html"
              ><i class="dropdown-icon fa fa-user"></i
              ><span>Profile</span></a
            >
            <a class="dropdown-item d-flex align-items-center align-self-center align-content-center" href="#"
              ><i class="dropdown-icon fa fa-wallet"></i
              ><span>My balance</span></a
            >
            <a class="dropdown-item d-flex align-items-center align-self-center align-content-center" href="inbox.html"
              ><i class="dropdown-icon fa fa-envelope"></i
              ><span>Inbox</span></a
            >
            <a class="dropdown-item d-flex align-items-center align-self-center align-content-center" href="#"
              ><i class="dropdown-icon fa fa-cogs"></i
              ><span>Settings</span></a
            >
            <div class="dropdown-divider"></div>
            <div class="sub-dropdown-menu show-on-hover">
              <a href="#" class="dropdown-toggle dropdown-item d-flex align-items-center align-self-center align-content-center no-caret"
                ><i class="fa fa-check text-success"></i>Online</a
              >
              <div class="dropdown-menu open-left-side">
                <a class="dropdown-item d-flex align-items-center align-self-center align-content-center" href="#"
                  ><i class="dropdown-icon fa fa-check text-success"></i
                  ><span>Online</span></a
                >
                <a class="dropdown-item d-flex align-items-center align-self-center align-content-center" href="#"
                  ><i class="dropdown-icon fa fa-circle-o text-warning"></i
                  ><span>Busy</span></a
                >
                <a class="dropdown-item d-flex align-items-center align-self-center align-content-center" href="#"
                  ><i
                    class="dropdown-icon fa fa-minus text-danger"
                  ></i
                  ><span>Offline</span></a
                >
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item d-flex align-items-center align-self-center align-content-center" href="#"
              ><i class="dropdown-icon fa fa-power-off"></i
              ><span>Log out</span></a
            >
          </div>
        </li>
      </ul>
    </nav>
    <!-- /Top Navbar -->
  </div>
</template>