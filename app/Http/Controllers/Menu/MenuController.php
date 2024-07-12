<?php

namespace App\Http\Controllers\Menu;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use App\Models\Route;

class MenuController extends Controller
{
    public function getMenuItems()
    {
        $menuItems = $this->buildMenuHierarchy();
        return response()->json($menuItems);
    }

    private function buildMenuHierarchy($parentId = null)
    {
        $menuItems = MenuItem::with('route')
            ->where("menuParentId", $parentId)
            ->where("menuIsActive", "1")
            ->get();

        $result = [];
        foreach ($menuItems as $menuItem) {
            $children = $this->buildMenuHierarchy($menuItem->menuId);

            $menuArray = [
                "menuTitle" => $menuItem->menuTitle,
                "menuSvg" => $menuItem->menuSvg,
                "menuType" => $menuItem->menuType,
                "menuRoute" => $menuItem->route->routeUrl,
                "menuParentId" => $menuItem->menuParentId,
                "menuIsActive" => $menuItem->menuIsActive,
                "children" => $children,
            ];

            $result[] = $menuArray;
        }

        return $result;
    }
}
